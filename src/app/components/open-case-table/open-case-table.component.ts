import { Component, OnInit, Input } from "@angular/core";
import { Case } from "src/app/models/Case.model";
import { BooleanHelper } from "src/app/utilities/boolean.util";
import { CaseService } from "src/app/services/case.service";
import { NavHelperService } from "src/app/services/nav-helper.service";

@Component({
  selector: "app-open-case-table",
  templateUrl: "./open-case-table.component.html",
  styleUrls: ["./open-case-table.component.css"]
})
export class OpenCaseTableComponent implements OnInit {
  @Input() public adminMode = false;

  public cases: Case[] = null;
  public error = false;

  public get ready(): boolean {
    return BooleanHelper.hasValue(this.cases);
  }

  public get hasCase(): boolean {
    return this.cases.length > 0;
  }

  constructor(
    private caseService: CaseService,
    private navHelper: NavHelperService,
  ) { }

  public ngOnInit() {
    this.loadCases();
  }

  public goToCaseDetails(myCase: Case) {
    this.navHelper.goToCaseDetails(myCase._id);
  }

  public requestDelete(myCase: Case): void {
    const confirmDelete = confirm(`Are you sure you want to delete ${myCase.name}?`);
    if (confirmDelete) {
      this.deleteCase(myCase);
    }
  }

  public goToCourtroom(myCase: Case) {
    this.navHelper.goToRoleSelect(myCase._id);
  }

  private loadCases() {
    this.cases = null;
    this.error = false;
    this.caseService.getOpenCases()
      .subscribe((res) => this.cases = res,
        (error) => {
          this.error = true;
          console.log("get case failed");
        });
  }

  private deleteCase(myCase: Case) {
    let response;
    this.caseService.deleteCase(myCase._id)
      .subscribe((res) => response = res,
        (error) => {
          this.error = true;
          console.log("delete case failed");
        }, () => {
          this.loadCases();
        });
  }

}