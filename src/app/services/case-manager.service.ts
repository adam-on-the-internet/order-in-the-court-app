import {Injectable} from "@angular/core";
import {CaseService} from "./case.service";
import {Case} from "../models/Case.model";
import {LogService} from "./log.service";
import {NavHelperService} from "./nav-helper.service";
import {interval, Subscription} from "rxjs";
import {BooleanHelper} from "../utilities/boolean.util";
import {CaseNameService} from "./case-name.service";
import {CaseStatusService} from "./case-status.service";
import {CaseEvidenceService} from "./case-evidence.service";
import {CaseOptions} from "../models/CaseOptions.model";

@Injectable({
  providedIn: "root"
})
export class CaseManagerService {
  public activeCase: Case = null;

  private caseId: string = null;
  private caseRefresher: Subscription;

  public get caseReady(): boolean {
    return this.activeCase !== null;
  }

  public get hasAName(): boolean {
    return this.activeCase.howManyPlayerNames > 0;
  }

  public get shouldShowEvidence(): boolean {
    return this.activeCase.isInProgress || this.activeCase.isVerdictSelection;
  }

  public get canStartVerdictSelection(): boolean {
    return this.activeCase.verdictIsNext && this.activeCase.isAllEvidenceRevealed;
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

  public createNewCase(caseOptions: CaseOptions = null) {
    let newCase: Case;
    this.caseStatusService.create(caseOptions)
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

  public removeWitnessName(witnessNumber: number) {
    let response;
    this.caseNameService.removeWitnessName(this.activeCase._id, witnessNumber)
      .subscribe((res) => response = res,
        (error) => {
          console.log("remove witness name failed");
        }, () => {
          this.navHelper.join(this.caseId);
        });
  }

  public selectWitness(witnessNumber: number, witnessId: string) {
    let response;
    this.caseEvidenceService.selectWitness(this.activeCase._id, witnessNumber, witnessId)
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
          this.logService.log("info", "Case Closed: The Case of the " + this.activeCase.name).subscribe();
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
    const source = interval(700);
    this.caseRefresher = source.subscribe(() => this.retrieveCase());
  }

  private retrieveCase() {
    let tempCase: Case;
    this.caseService.getSingleCase(this.caseId)
      .subscribe((res) => tempCase = res,
        (error) => {
          this.caseRefresher.unsubscribe();
          console.log("get case failed");
        }, () => {
          if (this.shouldUpdateCase(tempCase)) {
            console.log("updating...");
            this.activeCase = tempCase;
          }
          if (this.activeCase.isClosed) {
            this.caseRefresher.unsubscribe();
            this.navHelper.goToArchivedCase(this.activeCase._id);
          }
        });
  }

  private shouldUpdateCase(newCase: Case): boolean {
    if (!this.caseReady) {
      return true;
    }
    const versionChanged = newCase.version !== this.activeCase.version;
    const idMismatch = newCase._id !== this.activeCase._id;
    return idMismatch || versionChanged;
  }

  private shouldLoadCase(id: string) {
    if (!this.caseReady) {
      return true;
    }
    const caseAlreadyLoaded = this.activeCase._id === id;
    return !caseAlreadyLoaded;
  }
}
