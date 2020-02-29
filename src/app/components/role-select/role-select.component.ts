import { Component, OnInit } from "@angular/core";
import { NavHelperService } from "src/app/services/nav-helper.service";
import { CaseService } from "src/app/services/case.service";
import { ActivatedRoute } from "@angular/router";
import { Case } from "src/app/models/Case.model";
import { BooleanHelper } from "src/app/utilities/boolean.util";

@Component({
  selector: "app-role-select",
  templateUrl: "./role-select.component.html",
  styleUrls: ["./role-select.component.css"]
})
export class RoleSelectComponent implements OnInit {
  public case: Case = null;
  public error = false;

  public get ready(): boolean {
    return BooleanHelper.hasValue(this.case);
  }

  public get showWitness(): boolean {
    const unrevealedWitnessesRemain = this.case.witnesses.length > 0;
    const witnessesHaveBeenRevealed = this.case.revealedWitnesses.length > 0;
    return unrevealedWitnessesRemain || witnessesHaveBeenRevealed;
  }

  constructor(
    private caseService: CaseService,
    private navHelper: NavHelperService,
    private route: ActivatedRoute
  ) { }

  public ngOnInit() {
    this.loadCase();
  }

  public beJudge() {
    this.navHelper.goToJudge(this.case._id);
  }

  public beDefendant() {
    this.navHelper.goToDefendant(this.case._id);
  }

  public bePlaintiff() {
    this.navHelper.goToPlaintiff(this.case._id);
  }

  public beWitness() {
    this.navHelper.goToWitness(this.case._id);
  }

  public beJury() {
    this.navHelper.goToJury(this.case._id);
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
