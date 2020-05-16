import {Injectable} from "@angular/core";
import {CaseService} from "./case.service";
import {Case} from "../models/Case.model";
import {LogService} from "./log.service";
import {NavHelperService} from "./nav-helper.service";
import {interval, Subscription} from "rxjs";
import {BooleanHelper} from "../utilities/boolean.util";
import {WitnessPlayer} from "../models/WitnessPlayer.model";
import {CaseNameService} from "./case-name.service";
import {CaseStatusService} from "./case-status.service";
import {
  ASSIGN_ROLES,
  CASE_CLOSED,
  CLOSING_ARGUMENTS,
  CROSSFIRE,
  FREE_TIME,
  MAKE_SELECTIONS,
  OPENING_ARGUMENTS,
  VERDICT_SELECTION
} from "../constants/caseStatus.constants";
import {CaseEvidenceService} from "./case-evidence.service";

@Injectable({
  providedIn: "root"
})
export class CaseManagerService {
  public activeCase: Case = null;

  private caseId: string = null;
  private caseRefresher: Subscription;

  public get caseName(): string {
    return `The Case of the ${this.activeCase.name}`;
  }

  public get waitingMessage(): string {
    if (!this.caseReady) {
      return "Loading case...";
    } else if (this.statusIsAssignRoles) {
      return this.getAssignRolesWaitingMessage();
    } else if (this.statusIsMakeSelections) {
      return this.getMakeSelectionsWaitingMessage();
    } else if (this.statusIsVerdictSelection) {
      return "Waiting for The Judge to make a verdict...";
    } else {
      return "Waiting...";
    }
  }

  private getAssignRolesWaitingMessage() {
    if (this.essentialNamesSet) {
      return "Waiting for the judge to lock the roles...";
    } else {
      return "Waiting for more players: Plaintiff, Defendant, and Judge needed to start...";
    }
  }

  private getMakeSelectionsWaitingMessage(): string {
    if (this.allEvidenceSelected) {
      return "Waiting for the judge to start the case...";
    } else {
      return "Waiting for plaintiff, defendant, and witnesses to make selections...";
    }
  }

  public get caseWaitingMessage(): string {
    if (this.waitingForPlayers) {
      return "Waiting for all players to join...";
    }
    if (this.waitingForEvidence) {
      return "Waiting for evidence selection...";
    }
    if (this.caseUnstarted) {
      return "Waiting for the Judge to start the case...";
    }
    return null;
  }

  private get waitingForPlayers(): boolean {
    return !this.essentialNamesSet;
  }

  private get waitingForEvidence(): boolean {
    return !this.waitingForPlayers && !this.allEvidenceSelected;
  }

  public get caseReady(): boolean {
    return this.activeCase !== null;
  }

  public get statusText(): string {
    if (this.statusIsAssignRoles) {
      return "Role Assignment";
    } else if (this.statusIsMakeSelections) {
      return "Evidence Selection";
    } else if (this.statusIsFreeTime) {
      return "Open Trial";
    } else if (this.statusIsOpeningArguments) {
      return "Opening Arguments";
    } else if (this.statusIsCrossfire) {
      return "Crossfire Debate";
    } else if (this.statusIsClosingArguments) {
      return "Closing Arguments";
    } else if (this.statusIsVerdictSelection) {
      return "Final Ruling";
    } else if (this.statusIsCaseClosed) {
      return "Case Closed";
    }
    return "CASE STATUS";
  }

  public get caseUnstarted(): boolean {
    return this.activeCase.status === 0;
  }

  public get caseStarted(): boolean {
    return this.activeCase.status === 1;
  }

  public get caseClosed(): boolean {
    return this.activeCase.status === 2;
  }

  public get hasJudgeName(): boolean {
    return BooleanHelper.hasValue(this.activeCase.judgeName);
  }

  public get hasPlaintiffName(): boolean {
    return BooleanHelper.hasValue(this.activeCase.plaintiffName);
  }

  public get hasDefendantName(): boolean {
    return BooleanHelper.hasValue(this.activeCase.defendantName);
  }

  public get hasAWitness(): boolean {
    return this.witnesses.length > 0;
  }

  public get hasAName(): boolean {
    return this.hasAWitness || this.hasJudgeName || this.hasPlaintiffName || this.hasDefendantName;
  }

  public get hasMaxWitnesses(): boolean {
    return this.witnesses.length >= 5;
  }

  public get allPlaintiffEvidenceSelected(): boolean {
    return this.activeCase.plaintiffEvidenceSelected.length >= 10;
  }

  public get allDefendantEvidenceSelected(): boolean {
    return this.activeCase.defendantEvidenceSelected.length >= 10;
  }

  public get allPlaintiffEvidenceRevealed(): boolean {
    return this.activeCase.plaintiffEvidenceCourt.length >= 5;
  }

  public get allDefendantEvidenceRevealed(): boolean {
    return this.activeCase.defendantEvidenceCourt.length >= 5;
  }

  public get allEvidenceSelected(): boolean {
    return this.allPlaintiffEvidenceSelected && this.allDefendantEvidenceSelected;
  }

  public get allWitnessesSelected(): boolean {
    const witness1Ready = this.activeCase.witnessName1 === null || this.activeCase.selectedWitness1 !== null;
    const witness2Ready = this.activeCase.witnessName2 === null || this.activeCase.selectedWitness2 !== null;
    const witness3Ready = this.activeCase.witnessName3 === null || this.activeCase.selectedWitness3 !== null;
    const witness4Ready = this.activeCase.witnessName4 === null || this.activeCase.selectedWitness4 !== null;
    const witness5Ready = this.activeCase.witnessName5 === null || this.activeCase.selectedWitness5 !== null;
    return witness1Ready && witness2Ready && witness3Ready && witness4Ready && witness5Ready;
  }

  public get essentialNamesSet(): boolean {
    return this.hasDefendantName && this.hasPlaintiffName && this.hasJudgeName;
  }

  public get canBeStarted(): boolean {
    return this.essentialNamesSet && this.allEvidenceSelected && this.caseUnstarted;
  }

  public get witnesses(): WitnessPlayer[] {
    const myWitnesses: WitnessPlayer[] = [];
    if (BooleanHelper.hasValue(this.activeCase.witnessName1)) {
      myWitnesses.push({
        name: this.activeCase.witnessName1,
        character: this.activeCase.selectedWitness1.name,
        witnessNumber: 1,
      });
    }
    if (BooleanHelper.hasValue(this.activeCase.witnessName2)) {
      myWitnesses.push({
        name: this.activeCase.witnessName2,
        character: this.activeCase.selectedWitness2.name,
        witnessNumber: 2,
      });
    }
    if (BooleanHelper.hasValue(this.activeCase.witnessName3)) {
      myWitnesses.push({
        name: this.activeCase.witnessName3,
        character: this.activeCase.selectedWitness3.name,
        witnessNumber: 3,
      });
    }
    if (BooleanHelper.hasValue(this.activeCase.witnessName4)) {
      myWitnesses.push({
        name: this.activeCase.witnessName4,
        character: this.activeCase.selectedWitness4.name,
        witnessNumber: 4,
      });
    }
    if (BooleanHelper.hasValue(this.activeCase.witnessName5)) {
      myWitnesses.push({
        name: this.activeCase.witnessName5,
        character: this.activeCase.selectedWitness5.name,
        witnessNumber: 5,
      });
    }
    myWitnesses.forEach((witness) => {
      if (witness.character === null) {
        witness.character = "???";
      }
    });
    return myWitnesses;
  }

  public get statusIsAssignRoles(): boolean {
    return this.activeCase.status === ASSIGN_ROLES;
  }

  public get statusIsMakeSelections(): boolean {
    return this.activeCase.status === MAKE_SELECTIONS;
  }

  public get statusIsOpeningArguments(): boolean {
    return this.activeCase.status === OPENING_ARGUMENTS;
  }

  public get statusIsCrossfire(): boolean {
    return this.activeCase.status === CROSSFIRE;
  }

  public get statusIsClosingArguments(): boolean {
    return this.activeCase.status === CLOSING_ARGUMENTS;
  }

  public get statusIsFreeTime(): boolean {
    return this.activeCase.status === FREE_TIME;
  }

  public get statusIsVerdictSelection(): boolean {
    return this.activeCase.status === VERDICT_SELECTION;
  }

  public get statusIsCaseClosed(): boolean {
    return this.activeCase.status === CASE_CLOSED;
  }

  public get caseIsOngoing(): boolean {
    return this.statusIsFreeTime || this.statusIsOpeningArguments ||
      this.statusIsCrossfire || this.statusIsClosingArguments;
  }

  public get shouldShowEvidence(): boolean {
    return this.statusIsFreeTime || this.statusIsOpeningArguments ||
      this.statusIsCrossfire || this.statusIsClosingArguments || this.statusIsVerdictSelection;
  }

  public get statusAtEnd(): boolean {
    return this.statusIsFreeTime || this.statusIsClosingArguments;
  }

  public get canStartVerdictSelection(): boolean {
    return this.statusAtEnd && this.allEvidenceRevealed;
  }

  public get allEvidenceRevealed(): boolean {
    return this.allPlaintiffEvidenceRevealed && this.allDefendantEvidenceRevealed;
  }

  constructor(
    private caseService: CaseService,
    private caseEvidenceService: CaseEvidenceService,
    private caseNameService: CaseNameService,
    private caseStatusService: CaseStatusService,
    private logService: LogService,
    private navHelper: NavHelperService,
  ) {
  }

  public createNewCase() {
    let newCase: Case;
    this.caseStatusService.create()
      .subscribe((res) => newCase = res,
        (error) => {
          console.log("make case failed");
        }, () => {
          this.logService.log("info", "Case Opened: The Case of the " + newCase.name).subscribe();
          this.navHelper.join(newCase._id);
        });
  }

  public loadExistingCase(id: string) {
    if (this.shouldLoadCase(id)) {
      this.startRefresh(id);
    }
  }

  public assignJudgeName(name: string) {
    let response;
    this.caseNameService.assignJudgeName(this.activeCase._id, name)
      .subscribe((res) => response = res,
        (error) => {
          console.log("assign judge name failed");
        }, () => {
          this.navHelper.goToJudge(this.caseId);
        });
  }

  public removeJudgeName() {
    let response;
    this.caseNameService.removeJudgeName(this.activeCase._id)
      .subscribe((res) => response = res,
        (error) => {
          console.log("remove judge name failed");
        }, () => {
          this.navHelper.join(this.caseId);
        });
  }

  public assignPlaintiffName(name: string) {
    let response;
    this.caseNameService.assignPlaintiffName(this.activeCase._id, name)
      .subscribe((res) => response = res,
        (error) => {
          console.log("assign plaintiff name failed");
        }, () => {
          this.navHelper.goToPlaintiff(this.caseId);
        });
  }

  public removePlaintiffName() {
    let response;
    this.caseNameService.removePlaintiffName(this.activeCase._id)
      .subscribe((res) => response = res,
        (error) => {
          console.log("remove plaintiff name failed");
        }, () => {
          this.navHelper.join(this.caseId);
        });
  }

  public assignDefendantName(name: string) {
    let response;
    this.caseNameService.assignDefendantName(this.activeCase._id, name)
      .subscribe((res) => response = res,
        (error) => {
          console.log("assign defendant name failed");
        }, () => {
          this.navHelper.goToDefendant(this.caseId);
        });
  }

  public removeDefendantName() {
    let response;
    this.caseNameService.removeDefendantName(this.activeCase._id)
      .subscribe((res) => response = res,
        (error) => {
          console.log("remove defendant name failed");
        }, () => {
          this.navHelper.join(this.caseId);
        });
  }

  public assignWitnessName(name: string, witnessNumber: number) {
    let response;
    this.caseNameService.assignWitnessName(this.activeCase._id, name, witnessNumber)
      .subscribe((res) => response = res,
        (error) => {
          console.log("assign witness name failed");
        }, () => {
          this.navHelper.goToWitness(this.caseId, witnessNumber);
        });
  }

  public removeWitnessName(number: number) {
    let response;
    this.caseNameService.removeWitnessName(this.activeCase._id, number)
      .subscribe((res) => response = res,
        (error) => {
          console.log("remove witness name failed");
        }, () => {
          this.navHelper.join(this.caseId);
        });
  }

  public selectWitness(witnessNumber: number, witnessId: string) {
    let response;
    this.caseNameService.selectWitness(this.activeCase._id, witnessNumber, witnessId)
      .subscribe((res) => response = res,
        (error) => {
          console.log("select witness failed");
        });
  }

  public assignJuryName(name: string) {
    this.navHelper.goToJury(this.caseId);
  }

  public removeJuryName(name: string) {
    this.navHelper.join(this.caseId);
  }

  public lockRoles() {
    let response;
    this.caseStatusService.lockRoles(this.activeCase._id)
      .subscribe((res) => response = res,
        (error) => {
          console.log("status update failed");
        });
  }

  public startFreeTime() {
    let response;
    this.caseStatusService.startFreeTime(this.activeCase._id)
      .subscribe((res) => response = res,
        (error) => {
          console.log("status update failed");
        });
  }

  public startOpeningArguments() {
    let response;
    this.caseStatusService.startOpeningArguments(this.activeCase._id)
      .subscribe((res) => response = res,
        (error) => {
          console.log("status update failed");
        });
  }

  public startCrossfire() {
    let response;
    this.caseStatusService.startCrossfire(this.activeCase._id)
      .subscribe((res) => response = res,
        (error) => {
          console.log("status update failed");
        });
  }

  public startClosingArguments() {
    let response;
    this.caseStatusService.startClosingArguments(this.activeCase._id)
      .subscribe((res) => response = res,
        (error) => {
          console.log("status update failed");
        });
  }

  public startVerdictSelection() {
    let response;
    this.caseStatusService.startVerdictSelection(this.activeCase._id)
      .subscribe((res) => response = res,
        (error) => {
          console.log("status update failed");
        });
  }

  public makeVerdict(isDefendantGuilty: boolean) {
    let response;
    this.caseStatusService.makeVerdict(this.activeCase._id, isDefendantGuilty)
      .subscribe((res) => response = res,
        (error) => {
          console.log("close case failed");
        }, () => {
          this.logService.log("info", "Case Closed: " + this.activeCase.name).subscribe();
        });
  }

  public selectPlaintiffEvidence(evidenceId: string) {
    let response;
    this.caseEvidenceService.selectPlaintiffEvidence(this.activeCase._id, evidenceId)
      .subscribe((res) => response = res,
        (error) => {
          console.log("select plaintiff evidence failed");
        });
  }

  public selectDefendantEvidence(evidenceId: string) {
    let response;
    this.caseEvidenceService.selectDefendantEvidence(this.activeCase._id, evidenceId)
      .subscribe((res) => response = res,
        (error) => {
          console.log("select defendant evidence failed");
        });
  }

  public revealPlaintiffEvidence(evidenceId: string) {
    let response;
    this.caseEvidenceService.revealPlaintiffEvidence(this.activeCase._id, evidenceId)
      .subscribe((res) => response = res,
        (error) => {
          console.log("reveal plaintiff evidence failed");
        });
  }

  public revealDefendantEvidence(evidenceId: string) {
    let response;
    this.caseEvidenceService.revealDefendantEvidence(this.activeCase._id, evidenceId)
      .subscribe((res) => response = res,
        (error) => {
          console.log("reveal defendant evidence failed");
        });
  }

  public reset() {
    this.activeCase = null;
    if (BooleanHelper.hasValue(this.caseRefresher)) {
      this.caseRefresher.unsubscribe();
    }
  }

  private startRefresh(id: string) {
    this.caseId = id;
    this.reset();
    this.retrieveCase();
    const source = interval(750);
    this.caseRefresher = source.subscribe(() => this.retrieveCase());
  }

  private retrieveCase() {
    this.caseService.getSingleCase(this.caseId)
      .subscribe((res) => this.activeCase = res,
        (error) => {
          this.caseRefresher.unsubscribe();
          console.log("get case failed");
        }, () => {
          if (this.statusIsCaseClosed) {
            this.caseRefresher.unsubscribe();
            this.navHelper.goToArchivedCase(this.activeCase._id);
          }
        });
  }

  private shouldLoadCase(id: string) {
    if (!this.caseReady) {
      return true;
    }
    const caseAlreadyLoaded = this.activeCase._id === id;
    return !caseAlreadyLoaded;
  }
}
