import {Component, OnDestroy, OnInit} from "@angular/core";
import {NavHelperService} from "../../services/nav-helper.service";
import {Case} from "../../models/Case.model";
import {CaseService} from "../../services/case.service";
import {ASSIGN_ROLES} from "../../constants/caseStatus.constants";
import {interval, Subscription} from "rxjs";
import {BooleanHelper} from "../../utilities/boolean.util";

@Component({
  selector: "app-case-select",
  templateUrl: "./case-select.component.html",
  styleUrls: ["./case-select.component.css"]
})
export class CaseSelectComponent implements OnInit, OnDestroy {
  private cases: Case[] = null;

  private casesRefresher: Subscription;

  public get topCases(): Case[] {
    if (this.cases.length > 6) {
      return this.cases.slice(0, 6);
    }
    return this.cases;
  }

  public get ready(): boolean {
    return this.cases !== null;
  }

  public get noCases(): boolean {
    return this.cases.length === 0;
  }

  constructor(
    private caseService: CaseService,
    private navHelper: NavHelperService,
  ) {
  }

  public ngOnInit() {
    this.loadCases();
    this.startCasesRefresher();
  }

  public ngOnDestroy() {
    if (BooleanHelper.hasValue(this.casesRefresher)) {
      this.casesRefresher.unsubscribe();
    }
  }

  public joinCase(caseId: string) {
    this.navHelper.join(caseId);
  }

  public createCase() {
    this.navHelper.goToCreate();
  }

  public caseIsNotStarted(myCase: Case): boolean {
    return myCase.status === ASSIGN_ROLES;
  }

  private loadCases() {
    this.caseService.getOpenCases()
      .subscribe((res) => this.cases = res,
        (error) => {
          console.log("get case failed");
        });
  }

  private startCasesRefresher() {
    const source = interval(2500);
    this.casesRefresher = source.subscribe(() => this.loadCases());
  }

}
