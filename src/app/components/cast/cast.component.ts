import {Component, OnInit} from "@angular/core";
import {WitnessPlayer} from "../../models/WitnessPlayer.model";
import {CaseManagerService} from "../../services/case-manager.service";
import {Case} from "../../models/Case.model";

@Component({
  selector: "app-cast",
  templateUrl: "./cast.component.html",
  styleUrls: ["./cast.component.scss"]
})
export class CastComponent {

  public get case(): Case {
    return this.caseManager.activeCase;
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

  public get witnesses(): WitnessPlayer[] {
    return this.caseManager.witnesses;
  }

  public get hasAName(): boolean {
    return this.caseManager.hasAName;
  }

  constructor(
    private caseManager: CaseManagerService,
  ) {
  }

}
