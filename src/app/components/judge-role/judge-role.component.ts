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

  public get showTimer(): boolean {
    return this.caseManager.activeCase.isInProgress;
  }

  public get status(): string {
    return this.caseManager.activeCase.statusText;
  }

  public get timerValue() {
    const phaseStart = new Date(this.caseManager.activeCase.lastStatusUpdateDate);
    const now = new Date();
    return JudgeRoleComponent.timeDiffCalc(phaseStart, now);
  }

  public get witnesses(): WitnessPlayer[] {
    return this.caseManager.activeCase.witnessPlayers;
  }

  constructor(
    private caseManager: CaseManagerService,
    private route: ActivatedRoute,
  ) {
  }
  private caseId: string = null;

  private static timeDiffCalc(dateFuture, dateNow) {
    let diffInMilliSeconds = Math.abs(dateFuture - dateNow) / 1000;

    // calculate days
    const days = Math.floor(diffInMilliSeconds / 86400);
    diffInMilliSeconds -= days * 86400;

    // calculate hours
    const hours = Math.floor(diffInMilliSeconds / 3600) % 24;
    diffInMilliSeconds -= hours * 3600;

    // calculate minutes
    const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
    diffInMilliSeconds -= minutes * 60;

    // calculate seconds
    const seconds = Math.floor(diffInMilliSeconds) % 60;

    let difference = "";

    difference += (minutes === 0 || hours === 1) ? `${minutes} minute` : `${minutes} minutes`;

    return difference;
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
