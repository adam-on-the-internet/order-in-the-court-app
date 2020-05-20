import {Component, OnInit} from "@angular/core";
import {CaseManagerService} from "../../services/case-manager.service";
import {ActivatedRoute} from "@angular/router";
import {JUDGE_ROLE} from "../../constants/rule.constants";
import {WitnessPlayer} from "../../models/WitnessPlayer.model";

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

  public get waitingForRoles(): boolean {
    return this.caseManager.activeCase.isAssignRoles && !this.showRoleLock;
  }

  public get waitingNotForRoles(): boolean {
    return this.caseManager.activeCase.isMakeSelections && !this.showStructureOptions;
  }

  public get showRoleLock(): boolean {
    return this.caseManager.activeCase.isAssignRoles
      && this.caseManager.activeCase.areEssentialNamesSet;
  }

  public get showStructureOptions(): boolean {
    return this.caseManager.activeCase.isMakeSelections &&
      this.caseManager.activeCase.isAllEvidenceSelected &&
      this.caseManager.activeCase.allWitnessesReady;
  }

  public get showOpeningArguments(): boolean {
    return this.caseManager.activeCase.isOpeningArguments;
  }

  public get showCrossfire(): boolean {
    return this.caseManager.activeCase.isCrossfire;
  }

  public get showCaseStructure(): boolean {
    return !this.caseManager.activeCase.isAssignRoles &&
      (this.showStructureOptions || !this.caseManager.activeCase.isMakeSelections);
  }

  public get showClosingArguments(): boolean {
    return this.caseManager.activeCase.isClosingArguments;
  }

  public get showFreeTime(): boolean {
    return this.caseManager.activeCase.isFreeTime;
  }

  public get canStartVerdictSelection(): boolean {
    return this.caseManager.canStartVerdictSelection;
  }

  public get needEvidenceRevealed(): boolean {
    return this.caseManager.activeCase.verdictIsNext && !this.canStartVerdictSelection;
  }

  public get showVerdictOptions(): boolean {
    return this.caseManager.activeCase.isVerdictSelection;
  }

  public get shouldShowEvidence(): boolean {
    return this.caseManager.shouldShowEvidence;
  }

  public get showRoleAssignment(): boolean {
    return this.caseManager.activeCase.isAssignRoles;
  }

  public get roleText(): string {
    return JUDGE_ROLE;
  }

  public get witnesses(): WitnessPlayer[] {
    return this.caseManager.activeCase.witnessPlayers;
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
