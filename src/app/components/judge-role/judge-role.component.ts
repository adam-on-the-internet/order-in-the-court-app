import {Component, OnInit} from "@angular/core";
import {CaseManagerService} from "../../services/case-manager.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: "app-judge-role",
  templateUrl: "./judge-role.component.html",
  styleUrls: ["./judge-role.component.scss"]
})
export class JudgeRoleComponent implements OnInit {
  private caseId: string = null;

  public get caseLoaded(): boolean {
    return this.caseId &&
      this.caseManager.caseReady &&
      this.caseId === this.caseManager.activeCase._id;
  }

  public get waiting(): boolean {
    const waitingForRoles = this.caseManager.statusIsAssignRoles && !this.showRoleLock;
    const waitingForSelections = this.caseManager.statusIsMakeSelections && !this.showStructureOptions;
    return waitingForRoles || waitingForSelections;
  }

  public get waitMessage(): string {
    return this.caseManager.waitingMessage;
  }

  public get showRoleLock(): boolean {
    return this.assigningRoles && this.caseManager.essentialNamesSet;
  }

  public get showStructureOptions(): boolean {
    return this.caseManager.statusIsMakeSelections && this.caseManager.allEvidenceSelected;
  }

  public get showOpeningArguments(): boolean {
    return this.caseManager.statusIsOpeningArguments;
  }

  public get showCrossfire(): boolean {
    return this.caseManager.statusIsCrossfire;
  }

  public get showClosingArguments(): boolean {
    return this.caseManager.statusIsClosingArguments;
  }

  public get showFreeTime(): boolean {
    return this.caseManager.statusIsFreeTime;
  }

  public get canStartVerdictSelection(): boolean {
    return this.caseManager.canStartVerdictSelection;
  }

  public get needEvidenceRevealed(): boolean {
    return this.caseManager.statusAtEnd && !this.canStartVerdictSelection;
  }

  public get showVerdictOptions(): boolean {
    return this.caseManager.statusIsVerdictSelection;
  }

  public get shouldShowEvidence(): boolean {
    return this.caseManager.shouldShowEvidence;
  }

  public get assigningRoles(): boolean {
    return this.caseManager.statusIsAssignRoles;
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
    this.caseManager.removeJudgeName();
  }

  public lockRoles() {
    this.caseManager.lockRoles();
  }

  public startOpeningArguments() {
    this.caseManager.startOpeningArguments();
  }

  public startFreeTime() {
    this.caseManager.startFreeTime();
  }

  public endOpeningArguments() {
    this.caseManager.startCrossfire();
  }

  public endCrossfire() {
    this.caseManager.startClosingArguments();
  }

  public startVerdictSelection() {
    this.caseManager.startVerdictSelection();
  }

  public submitGuiltyVerdict() {
    this.caseManager.makeVerdict(true);
  }

  public submitNotGuiltyVerdict() {
    this.caseManager.makeVerdict(false);
  }

  private loadCase() {
    this.caseId = this.route.snapshot.paramMap.get("id");
    this.caseManager.loadExistingCase(this.caseId);
  }

}
