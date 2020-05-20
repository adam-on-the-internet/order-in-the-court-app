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
    return this.caseManager.caseReady && this.caseManager.activeCase.isAssignRoles;
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
    return this.caseManager.caseReady && this.caseManager.activeCase.isMakeSelections;
  }

  public get statusIsVerdictSelection(): boolean {
    return this.caseManager.caseReady && this.caseManager.activeCase.isVerdictSelection;
  }

  private get makeSelectionsWaitingMessage(): string {
    if (this.caseManager.activeCase.isAllEvidenceSelected && this.caseManager.activeCase.allWitnessesReady) {
      return "Waiting for the judge to start the case...";
    } else {
      return "Waiting for selections...";
    }
  }

  public get neededSelections(): string[] {
    const necessarySelections = [];
    if (!this.caseManager.activeCase.isAllPlaintiffEvidenceSelected) {
      necessarySelections.push(this.plaintiffMessage);
    }
    if (!this.caseManager.activeCase.isAllDefendantEvidenceSelected) {
      necessarySelections.push(this.defendantMessage);
    }
    if (!this.caseManager.activeCase.allWitnessesReady) {
      necessarySelections.push(this.witnessMessage);
    }
    return necessarySelections;
  }

  private get plaintiffMessage(): string {
    const chosen = this.caseManager.activeCase.plaintiffEvidenceSelected.length;
    return `Plaintiff is selecting evidence (${chosen}/10)`;
  }

  private get defendantMessage(): string {
    const chosen = this.caseManager.activeCase.defendantEvidenceSelected.length;
    return `Defendant is selecting evidence (${chosen}/10)`;
  }

  private get witnessMessage(): string {
    const chosen = this.caseManager.activeCase.witnessPlayers.filter((wit) => {
      return wit.character !== "???";
    }).length;
    const needed = this.caseManager.activeCase.witnessPlayers.length;
    return `Witnesses are being chosen (${chosen}/${needed})`;
  }

  private get assignRolesWaitingMessage() {
    if (this.caseManager.activeCase.areEssentialNamesSet) {
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
