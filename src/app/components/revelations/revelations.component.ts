import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { Case } from "src/app/models/Case.model";
import { BooleanHelper } from "src/app/utilities/boolean.util";
import { CaseService } from "src/app/services/case.service";
import { interval, Subscription } from "rxjs";

@Component({
  selector: "app-revelations",
  templateUrl: "./revelations.component.html",
  styleUrls: ["./revelations.component.css"]
})
export class RevelationsComponent implements OnInit, OnDestroy {
  @Input() public caseId: string = null;

  public case: Case = null;
  private caseRefresher: Subscription;

  public get ready(): boolean {
    return BooleanHelper.hasValue(this.case);
  }

  public get judgeName(): string {
    return "???";
  }

  public get defendantName(): string {
    return "???";
  }

  public get plaintiffName(): string {
    return "???";
  }

  public get witnesses() {
    const myWitnesses = [];
    const allWitnesses = this.case.revealedWitnesses.concat(this.case.unrevealedWitnesses);
    allWitnesses.forEach((witness) => {
      myWitnesses.push({
        name: "???",
        character: witness.name
      });
    });
    return myWitnesses;
  }

  constructor(
    private caseService: CaseService,
  ) { }

  public ngOnInit() {
    this.initialCaseLoad();
    this.setupCaseRefresh();
  }

  public ngOnDestroy() {
    this.closeAutoloader();
  }

  private initialCaseLoad() {
    this.case = null;
    this.loadCase();
  }

  private setupCaseRefresh() {
    const source = interval(1000);
    this.caseRefresher = source.subscribe(() => this.loadCase());
  }

  private loadCase() {
    this.caseService.getSingleCase(this.caseId)
      .subscribe((res) => this.case = res,
        (error) => {
          this.closeAutoloader();
          console.log("get case failed");
        }, () => {
          if (this.case.closed) {
            this.closeAutoloader();
          }
        });
  }

  private closeAutoloader() {
    if (BooleanHelper.hasValue(this.caseRefresher)) {
      this.caseRefresher.unsubscribe();
    }
  }
}
