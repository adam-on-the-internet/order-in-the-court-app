import {Component} from "@angular/core";
import {CaseManagerService} from "../../services/case-manager.service";

@Component({
  selector: "app-waiting",
  templateUrl: "./waiting.component.html",
  styleUrls: ["./waiting.component.scss"]
})
export class WaitingComponent {

  public get waitMessage(): string {
    if (!this.caseManager.caseReady) {
      return "Loading case...";
    } else if (this.statusIsAssignRoles) {
      return this.assignRolesWaitingMessage;
    } else if (this.statusIsMakeSelections) {
      return this.makeSelectionsWaitingMessage;
    } else if (this.statusIsVerdictSelection) {
      return "Waiting for The Judge to make a verdict...";
    } else {
      return "Waiting...";
    }
  }

  public get statusIsAssignRoles(): boolean {
    return this.caseManager.caseReady && this.caseManager.statusIsAssignRoles;
  }

  public get neededRoles(): string[] {
    const necessaryRoles = [];
    if (this.caseManager.activeCase.judgeName === null) {
      necessaryRoles.push("Judge needed");
    }
    if (this.caseManager.activeCase.plaintiffName === null) {
      necessaryRoles.push("Plaintiff needed");
    }
    if (this.caseManager.activeCase.defendantName === null) {
      necessaryRoles.push("Defendant needed");
    }
    return necessaryRoles;
  }

  public get statusIsMakeSelections(): boolean {
    return this.caseManager.caseReady && this.caseManager.statusIsMakeSelections;
  }

  public get statusIsVerdictSelection(): boolean {
    return this.caseManager.caseReady && this.caseManager.statusIsVerdictSelection;
  }

  private get makeSelectionsWaitingMessage(): string {
    if (this.caseManager.allEvidenceSelected && this.caseManager.allWitnessesSelected) {
      return "Waiting for the judge to start the case...";
    } else {
      return "Waiting for selections...";
    }
  }

  public get neededSelections(): string[] {
    const necessarySelections = [];
    if (!this.caseManager.allPlaintiffEvidenceSelected) {
      necessarySelections.push("Plaintiff is selecting evidence");
    }
    if (!this.caseManager.allDefendantEvidenceSelected) {
      necessarySelections.push("Defendant is selecting evidence");
    }
    if (!this.caseManager.allWitnessesSelected) {
      necessarySelections.push("Witnesses are being chosen");
    }
    return necessarySelections;
  }

  private get assignRolesWaitingMessage() {
    if (this.caseManager.essentialNamesSet) {
      return "Waiting for the judge to lock the roles...";
    } else {
      return "Waiting for more players...";
    }
  }

  constructor(
    private caseManager: CaseManagerService,
  ) {
  }

}
