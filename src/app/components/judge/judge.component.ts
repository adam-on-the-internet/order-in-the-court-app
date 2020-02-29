import { Component, OnInit } from "@angular/core";
import { BooleanHelper } from "src/app/utilities/boolean.util";
import { CaseService } from "src/app/services/case.service";
import { ActivatedRoute } from "@angular/router";
import { Case } from "src/app/models/Case.model";

@Component({
  selector: "app-judge",
  templateUrl: "./judge.component.html",
  styleUrls: ["./judge.component.css"]
})
export class JudgeComponent implements OnInit {
  public case: Case = null;
  public saveInProgress = false;
  public error = false;

  public get ready(): boolean {
    return BooleanHelper.hasValue(this.case);
  }

  constructor(
    private caseService: CaseService,
    private route: ActivatedRoute
  ) { }

  public ngOnInit() {
    this.loadCase();
  }

  public save() {
    this.saveInProgress = true;
    this.caseService.updateJudgeCaseNotes(this.case)
      .subscribe((res) => this.case = res,
        (error) => {
          this.saveInProgress = false;
          this.error = true;
          console.log("update case failed");
        }, () => {
          this.saveInProgress = false;
        });
  }

  public updateNotes(event) {
    this.case.notes = event.target.value;
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
        });
  }

}
