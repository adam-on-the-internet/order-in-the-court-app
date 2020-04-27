import { Component, Input, OnInit } from "@angular/core";
import { Case } from "src/app/models/Case.model";
import { BooleanHelper } from "src/app/utilities/boolean.util";
import { CaseManagerService } from "src/app/services/case-manager.service";
import { WitnessPlayer } from "src/app/models/WitnessPlayer.model";

@Component({
  selector: "app-revelations",
  templateUrl: "./revelations.component.html",
  styleUrls: ["./revelations.component.css"]
})
export class RevelationsComponent implements OnInit {
  @Input() public caseId: string = null;

  public get case(): Case {
    return this.caseManager.activeCase;
  }

  public get caseClosed(): boolean {
    return this.caseManager.caseClosed;
  }

  public get caseStarted(): boolean {
    return this.caseManager.caseStarted;
  }

  public get ready(): boolean {
    return BooleanHelper.hasValue(this.case);
  }

  public get hasJudgeName(): boolean {
    return this.caseManager.hasJudgeName;
  }

  public get judgeName(): string {
    return this.case.judgeName;
  }

  public get hasPlaintiffName(): boolean {
    return this.caseManager.hasPlaintiffName;
  }

  public get plaintiffName(): string {
    return this.case.plaintiffName;
  }

  public get hasDefendantName(): boolean {
    return this.caseManager.hasDefendantName;
  }

  public get defendantName(): string {
    return this.case.defendantName;
  }

  public get witnessesPresent(): boolean {
    return this.caseManager.hasAWitness;
  }

  public get hasMaxWitnesses(): boolean {
    return this.caseManager.hasMaxWitnesses;
  }

  public get witnesses(): WitnessPlayer[] {
    return this.caseManager.witnesses;
  }

  public get caseUnstarted(): boolean {
    return this.caseManager.caseUnstarted;
  }

  public get showRoles(): boolean {
    return this.hasJudgeName || this.hasPlaintiffName || this.hasDefendantName || this.witnessesPresent;
  }

  public get waitingForPlayers(): boolean {
    return !this.caseManager.allNamesSet;
  }

  public get waitingForEvidence(): boolean {
    return !this.waitingForPlayers && !this.caseManager.allEvidenceSelected;
  }

  public get waitingForJudge(): boolean {
    return !this.waitingForPlayers && !this.waitingForEvidence && this.caseUnstarted;
  }

  constructor(
    private caseManager: CaseManagerService,
  ) { }

  public ngOnInit() {
    if (this.caseId) {
      this.caseManager.loadExistingCase(this.caseId);
    }
  }
}
