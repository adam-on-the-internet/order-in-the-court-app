import {Component, OnInit} from "@angular/core";
import {CaseManagerService} from "../../services/case-manager.service";
import {ActivatedRoute} from "@angular/router";
import {Evidence} from "../../models/Evidence.model";
import {EVIDENCE_HELP} from "../../constants/rule.constants";

@Component({
  selector: "app-plaintiff-role",
  templateUrl: "./plaintiff-role.component.html",
  styleUrls: ["./plaintiff-role.component.scss"]
})
export class PlaintiffRoleComponent implements OnInit {
  private caseId: string = null;

  public get caseLoaded(): boolean {
    return this.caseId &&
      this.caseManager.caseReady &&
      this.caseId === this.caseManager.activeCase._id;
  }

  public get waiting(): boolean {
    const waitingForSelections = this.caseManager.statusIsMakeSelections && !this.showEvidencePool;
    return this.caseManager.statusIsAssignRoles || waitingForSelections ||
      this.caseManager.statusIsVerdictSelection;
  }

  public get waitMessage(): string {
    return this.caseManager.waitingMessage;
  }

  public get assigningRoles(): boolean {
    return this.caseManager.statusIsAssignRoles;
  }

  public get showEvidencePool(): boolean {
    return this.caseManager.statusIsMakeSelections && !this.caseManager.allPlaintiffEvidenceSelected;
  }

  public get evidencePool(): Evidence[] {
    return this.caseManager.activeCase.poolPlaintiffEvidence;
  }

  public get unrevealedEvidence(): Evidence[] {
    return this.caseManager.activeCase.unrevealedPlaintiffEvidence;
  }

  public get revealedEvidence(): Evidence[] {
    return this.caseManager.activeCase.revealedPlaintiffEvidence;
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
    return "Defendant Evidence";
  }

  public get otherEvidence(): Evidence[] {
    return this.caseManager.activeCase.revealedDefendantEvidence;
  }

  public get someEvidenceSelected(): boolean {
    return this.unrevealedEvidence.length +
      this.revealedEvidence.length > 0;
  }

  public get canRevealEvidence(): boolean {
    return this.caseManager.caseIsOngoing;
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
    this.caseManager.removePlaintiffName();
  }

  public selectEvidence(evidence: Evidence) {
    this.caseManager.selectPlaintiffEvidence(evidence._id);
  }

  public revealEvidence(evidence: Evidence) {
    this.caseManager.revealPlaintiffEvidence(evidence._id);
  }

  private loadCase() {
    this.caseId = this.route.snapshot.paramMap.get("id");
    this.caseManager.loadExistingCase(this.caseId);
  }

}
