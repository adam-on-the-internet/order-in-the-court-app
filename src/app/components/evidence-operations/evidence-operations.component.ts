import {Component, Input} from "@angular/core";
import {CaseManagerService} from "../../services/case-manager.service";
import {Evidence} from "../../models/Evidence.model";

@Component({
  selector: "app-evidence-operations",
  templateUrl: "./evidence-operations.component.html",
  styleUrls: ["./evidence-operations.component.scss"]
})
export class EvidenceOperationsComponent {
  @Input() public isPlaintiff = true;

  public get ready(): boolean {
    return this.caseManager.caseReady;
  }

  public get showSelectStartingEvidence(): boolean {
    return this.caseManager.activeCase.isMakeSelections &&
      !this.isStartingEvidenceRevealed;
  }

  private get isStartingEvidenceRevealed(): boolean {
    if (this.isPlaintiff) {
      return this.caseManager.activeCase.isStartingDefendantEvidenceRevealed;
    } else {
      return this.caseManager.activeCase.isStartingPlaintiffEvidenceRevealed;
    }
  }

  public get poolEvidence(): Evidence[] {
    if (this.isPlaintiff) {
      return this.caseManager.activeCase.plaintiffEvidencePool;
    } else {
      return this.caseManager.activeCase.defendantEvidencePool;
    }
  }

  public get showPresentEvidence(): boolean {
    return this.caseManager.shouldShowEvidence && !this.isAllRoleEvidenceRevealed;
  }

  private get isAllRoleEvidenceRevealed(): boolean {
    if (this.isPlaintiff) {
      return this.caseManager.activeCase.isAllPlaintiffEvidenceRevealed;
    } else {
      return this.caseManager.activeCase.isAllDefendantEvidenceRevealed;
    }
  }

  constructor(
    private caseManager: CaseManagerService,
  ) {
  }

  public selectEvidence(evidence: Evidence) {
    if (this.isPlaintiff) {
      this.caseManager.pickStartingDefendantEvidence(evidence._id);
    } else {
      this.caseManager.pickStartingPlaintiffEvidence(evidence._id);
    }
  }

  public revealEvidence(evidence: Evidence) {
    if (this.isPlaintiff) {
      this.caseManager.revealPlaintiffEvidence(evidence._id);
    } else {
      this.caseManager.revealDefendantEvidence(evidence._id);
    }
  }

}
