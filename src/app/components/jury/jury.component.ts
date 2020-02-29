import { Component, OnInit, OnDestroy } from "@angular/core";
import { BooleanHelper } from "src/app/utilities/boolean.util";
import { CaseService } from "src/app/services/case.service";
import { ActivatedRoute } from "@angular/router";
import { Case } from "src/app/models/Case.model";
import { interval, Subscription } from "rxjs";

@Component({
  selector: "app-jury",
  templateUrl: "./jury.component.html",
  styleUrls: ["./jury.component.css"]
})
export class JuryComponent implements OnInit, OnDestroy {
  public case: Case = null;
  public error = false;
  private caseRefresher: Subscription;
  private caseId: string = null;

  public get ready(): boolean {
    return BooleanHelper.hasValue(this.case);
  }

  constructor(
    private caseService: CaseService,
    private route: ActivatedRoute
  ) { }

  public ngOnInit() {
    this.initialCaseLoad();
    this.setupCaseRefresh();
  }

  public ngOnDestroy() {
    this.caseRefresher.unsubscribe();
  }

  private initialCaseLoad() {
    this.caseId = this.route.snapshot.paramMap.get("id");
    this.case = null;
    this.case = null;
    this.error = false;
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
          this.caseRefresher.unsubscribe();
          this.error = true;
          console.log("get case failed");
        });
  }
}
