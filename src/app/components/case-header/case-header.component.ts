import {Component} from "@angular/core";
import {CaseManagerService} from "../../services/case-manager.service";
import {Case} from "../../models/Case.model";

@Component({
  selector: "app-case-header",
  templateUrl: "./case-header.component.html",
  styleUrls: ["./case-header.component.scss"]
})
export class CaseHeaderComponent {

  public get case(): Case {
    return this.caseManagerService.activeCase;
  }

  public get issue(): string {
    return this.case.issue;
  }

  public get caseLink(): string {
    return `https://order-in-the-court-app.herokuapp.com/courtroom/${this.case._id}`;
  }

  public get caseClosed(): boolean {
    return this.caseManagerService.statusIsCaseClosed;
  }

  public get notGuilty(): boolean {
    return !this.caseManagerService.activeCase.isDefendantGuilty;
  }

  public get ready(): boolean {
    return this.caseManagerService.caseReady;
  }

  public get status(): string {
    return this.caseManagerService.statusText;
  }

  constructor(
    private caseManagerService: CaseManagerService,
  ) {
  }

}
