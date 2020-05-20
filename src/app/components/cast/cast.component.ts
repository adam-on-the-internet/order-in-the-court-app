import {Component} from "@angular/core";
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
    return this.caseManager.activeCase.judgeNameSet;
  }

  public get judgeName(): string {
    return this.case.judgeName;
  }

  public get hasPlaintiffName(): boolean {
    return this.caseManager.activeCase.plaintiffNameSet;
  }

  public get plaintiffName(): string {
    return this.case.plaintiffName;
  }

  public get hasDefendantName(): boolean {
    return this.caseManager.activeCase.defendantNameSet;
  }

  public get defendantName(): string {
    return this.case.defendantName;
  }

  public get witnesses(): WitnessPlayer[] {
    return this.caseManager.activeCase.witnessPlayers;
  }

  public get hasAName(): boolean {
    return this.caseManager.caseReady && this.caseManager.hasAName;
  }

  constructor(
    private caseManager: CaseManagerService,
  ) {
  }

}
