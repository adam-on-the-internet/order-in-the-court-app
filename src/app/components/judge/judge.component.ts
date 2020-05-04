import { Component, OnInit } from "@angular/core";
import { BooleanHelper } from "src/app/utilities/boolean.util";
import { ActivatedRoute } from "@angular/router";
import { Case } from "src/app/models/Case.model";
import { CaseManagerService } from "src/app/services/case-manager.service";
import { JUDGE_ROLE } from "src/app/constants/rule.constants";

@Component({
  selector: "app-judge",
  templateUrl: "./judge.component.html",
  styleUrls: ["./judge.component.css"]
})
export class JudgeComponent implements OnInit {
  public plaintiffScore = 0;
  public defendantScore = 0;
  public notes: string = null;

  public get judgeRole(): string {
    return JUDGE_ROLE;
  }

  public get ready(): boolean {
    return BooleanHelper.hasValue(this.case);
  }

  public get readyToClose(): boolean {
    const allPEvidenceRevealed = this.case.unrevealedPlaintiffEvidence.length === 0;
    const allDEvidenceRevealed = this.case.unrevealedDefendantEvidence.length === 0;
    return allPEvidenceRevealed && allDEvidenceRevealed;
  }

  public get case(): Case {
    return this.caseManager.activeCase;
  }

  public get caseUnstarted(): boolean {
    return this.caseManager.caseUnstarted;
  }

  public get caseStarted(): boolean {
    return this.caseManager.caseStarted;
  }

  public get canBeStarted(): boolean {
    return this.caseManager.canBeStarted;
  }

  public get caseClosed(): boolean {
    return this.caseManager.caseClosed;
  }

  public get waitMessage(): string {
    return this.caseManager.caseWaitingMessage;
  }

  constructor(
    private caseManager: CaseManagerService,
    private route: ActivatedRoute
  ) { }

  public ngOnInit() {
    this.loadCase();
  }

  public startCase() {
    this.caseManager.startCase();
  }

  public verdictGuilty(guilty: boolean) {
    this.caseManager.closeCase(guilty);
  }

  public updateNotes(event) {
    this.notes = event.target.value;
  }

  public updatePlaintiffScore(amount: number) {
    this.plaintiffScore = this.plaintiffScore + amount;
  }

  public updateDefendantScore(amount: number) {
    this.defendantScore = this.defendantScore + amount;
  }

  private loadCase() {
    const id = this.route.snapshot.paramMap.get("id");
    this.caseManager.loadExistingCase(id);
  }

}
