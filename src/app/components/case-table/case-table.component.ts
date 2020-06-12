import {Component, Input} from "@angular/core";
import {Case} from "../../models/Case.model";
import {NavHelperService} from "../../services/nav-helper.service";
import {CaseService} from "../../services/case.service";

@Component({
  selector: "app-case-table",
  templateUrl: "./case-table.component.html",
  styleUrls: ["./case-table.component.scss"]
})
export class CaseTableComponent {
  @Input() public cases: Case[] = [];
  @Input() public title: string = null;
  @Input() public archiveMode = false;

  public get hasTitle(): boolean {
    return this.title !== null;
  }

  public get hasCases(): boolean {
    return this.cases.length > 0;
  }

  constructor(
    private navHelper: NavHelperService,
    private caseService: CaseService,
  ) {
  }

  public goToCaseDetails(myCase: Case) {
    this.navHelper.goToCaseDetails(myCase._id);
  }

  public getMoreInfo(myCase: Case) {
    this.navHelper.goToArchivedCase(myCase._id);
  }

  public requestDelete(myCase: Case): void {
    const confirmDelete = confirm(`Are you sure you want to delete ${myCase.name}?`);
    if (confirmDelete) {
      this.deleteCase(myCase);
    }
  }

  public deleteAllCases(): void {
    const confirmDelete = confirm(`Are you sure you want to delete ALL these cases?`);
    if (confirmDelete) {
      this.cases.forEach((myCase) => {
        this.deleteCase(myCase);
      });
    }
  }

  private deleteCase(myCase: Case) {
    let response;
    this.caseService.deleteCase(myCase._id)
      .subscribe((res) => response = res,
        (error) => {
          console.log("delete case failed");
        }, () => {
          this.cases = this.cases.filter((thisCase) => {
            return thisCase._id !== myCase._id;
          });
        });
  }

}
