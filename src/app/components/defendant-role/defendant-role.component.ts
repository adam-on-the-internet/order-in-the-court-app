import {Component, OnInit} from "@angular/core";
import {CaseManagerService} from "../../services/case-manager.service";
import {ActivatedRoute} from "@angular/router";
import {Evidence} from "../../models/Evidence.model";
import {DEFENDANT_ROLE, EVIDENCE_HELP} from "../../constants/rule.constants";

@Component({
  selector: "app-defendant-role",
  templateUrl: "./defendant-role.component.html",
  styleUrls: ["./defendant-role.component.scss"]
})
export class DefendantRoleComponent implements OnInit {
  private caseId: string = null;

  public get caseLoaded(): boolean {
    return this.caseId &&
      this.caseManager.caseReady &&
      this.caseId === this.caseManager.activeCase._id;
  }

  public get roleText(): string {
    return DEFENDANT_ROLE;
  }

  public get waitingNotForRoles(): boolean {
    const waitingForSelections = this.caseManager.activeCase.isMakeSelections && !this.showEvidencePool;
    return waitingForSelections || this.caseManager.activeCase.isVerdictSelection;
  }

  public get assigningRoles(): boolean {
    return this.caseManager.activeCase.isAssignRoles;
  }

  public get showEvidencePool(): boolean {
    return this.caseManager.activeCase.isMakeSelections &&
      !this.caseManager.activeCase.isStartingPlaintiffEvidenceRevealed;
  }

  public get evidencePool(): Evidence[] {
    return this.caseManager.activeCase.defendantEvidencePool;
  }

  public get revealedEvidence(): Evidence[] {
    return this.caseManager.activeCase.defendantEvidenceCourt;
  }

  public get evidenceHelp(): string {
    return EVIDENCE_HELP;
  }

  public get showEvidenceRow(): boolean {
    return this.showOtherEvidence || this.someEvidenceSelected;
  }

  public get showOtherEvidence(): boolean {
    return this.caseManager.shouldShowEvidence;
  }

  public get otherListName(): string {
    return "Plaintiff Evidence";
  }

  public get otherEvidence(): Evidence[] {
    return this.caseManager.activeCase.plaintiffEvidenceCourt;
  }

  public get someEvidenceSelected(): boolean {
    return this.evidencePool.length +
      this.revealedEvidence.length > 0;
  }

  public get canRevealEvidence(): boolean {
    return this.caseManager.activeCase.isInProgress && !this.caseManager.activeCase.isAllDefendantEvidenceRevealed;
  }

  constructor(
    private caseManager: CaseManagerService,
    private route: ActivatedRoute,
  ) {
  }

  public ngOnInit() {
    this.loadCase();
  }

  public backToRoleSelect() {
    this.caseManager.removeDefendantName();
  }

  public selectEvidence(evidence: Evidence) {
    this.caseManager.pickStartingPlaintiffEvidence(evidence._id);
  }

  public revealEvidence(evidence: Evidence) {
    this.caseManager.revealDefendantEvidence(evidence._id);
  }


  private loadCase() {
    this.caseId = this.route.snapshot.paramMap.get("id");
    this.caseManager.loadExistingCase(this.caseId);
  }

}
