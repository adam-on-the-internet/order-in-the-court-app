import { Component, OnInit, OnDestroy } from "@angular/core";
import { BooleanHelper } from "src/app/utilities/boolean.util";
import { CaseService } from "src/app/services/case.service";
import { ActivatedRoute } from "@angular/router";
import { Case } from "src/app/models/Case.model";
import { interval, Subscription } from "rxjs";

@Component({
  selector: "app-judge",
  templateUrl: "./judge.component.html",
  styleUrls: ["./judge.component.css"]
})
export class JudgeComponent implements OnInit, OnDestroy {
  public case: Case = null;
  public error = false;
  private autoSaver: Subscription;

  public get ready(): boolean {
    return BooleanHelper.hasValue(this.case);
  }

  public get readyToClose(): boolean {
    const allWitnessRevealed = this.case.unrevealedWitnesses.length === 0;
    const allPEvidenceRevealed = this.case.unrevealedPlaintiffEvidence.length === 0;
    const allDEvidenceRevealed = this.case.unreavledDefendantEvidence.length === 0;
    return allWitnessRevealed && allPEvidenceRevealed && allDEvidenceRevealed;
  }

  constructor(
    private caseService: CaseService,
    private route: ActivatedRoute
  ) { }

  public ngOnInit() {
    this.loadCase();
  }

  public ngOnDestroy() {
    this.autoSaver.unsubscribe();
  }

  public closeCase() {
    this.caseService.closeCase(this.case._id)
    .subscribe((res) => this.case = res,
      (error) => {
        this.error = true;
        console.log("close case failed");
      });
  }

  public save() {
    this.caseService.updateJudgeCaseNotes(this.case)
      .subscribe((res) => this.case = res,
        (error) => {
          this.error = true;
          console.log("update case failed");
        });
  }

  public updateNotes(event) {
    this.case.notes = event.target.value;
  }

  public updateVerdict(event) {
    this.case.verdict = event.target.value;
  }

  public updatePlaintiffScore(amount: number) {
    this.case.plaintiffScore = this.case.plaintiffScore + amount;
  }

  public updateDefendantScore(amount: number) {
    this.case.defendantScore = this.case.defendantScore + amount;
  }

  private loadCase() {
    this.case = null;
    this.error = false;
    const id = this.route.snapshot.paramMap.get("id");
    this.caseService.getSingleCase(id)
      .subscribe((res) => this.case = res,
        (error) => {
          this.error = true;
          console.log("get case failed");
        }, () => {
          this.setupAutosave();
        });
  }

  private setupAutosave() {
    const source = interval(5000);
    this.autoSaver = source.subscribe(() => this.save());
  }

}
