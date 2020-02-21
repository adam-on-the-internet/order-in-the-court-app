import { Component, OnInit, Input } from "@angular/core";
import { Case } from "src/app/models/Case.model";
import { BooleanHelper } from "src/app/utilities/boolean.util";
import { CaseService } from "src/app/services/case.service";
import { NavHelperService } from "src/app/services/nav-helper.service";
import { CaseOrder } from "src/app/models/CaseOrder.model";

@Component({
  selector: "app-case-table",
  templateUrl: "./case-table.component.html",
  styleUrls: ["./case-table.component.css"]
})
export class CaseTableComponent implements OnInit {
  @Input() public adminMode = false;

  public cases: Case[] = null;
  public error = false;

  public get ready(): boolean {
    return BooleanHelper.hasValue(this.cases);
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

  public generateCase() {
    const caseName = prompt("What name do you want to give your case?");
    const evidencePerSide = prompt("How much evidence should each team have?");
    const witnesses = prompt("How many witnesses do you want?");
    const caseOrder: CaseOrder = {
      name: caseName,
      witnessCount: Number(witnesses),
      evidenceCount: Number(evidencePerSide)
    };
    this.submitCase(caseOrder);
  }

  private submitCase(caseOrder: CaseOrder) {
    let newCase: Case;
    this.caseService.makeACase(caseOrder)
      .subscribe((res) => newCase = res,
        (error) => {
          this.error = true;
          console.log("make case failed");
        }, () => {
          this.goToCourtroom(newCase);
        });
  }

  private loadCases() {
    this.cases = null;
    this.error = false;
    this.caseService.getAllCases()
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
