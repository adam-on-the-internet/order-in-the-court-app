import {Component, OnInit} from "@angular/core";
import {CaseManagerService} from "../../services/case-manager.service";
import {ActivatedRoute} from "@angular/router";
import {DEFENDANT_ROLE} from "../../constants/rule.constants";

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

  public get showRevealedEvidence(): boolean {
    return this.caseManager.shouldShowEvidence;
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

  private loadCase() {
    this.caseId = this.route.snapshot.paramMap.get("id");
    this.caseManager.loadExistingCase(this.caseId);
  }

}
