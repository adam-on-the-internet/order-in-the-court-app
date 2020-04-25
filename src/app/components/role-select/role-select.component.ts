import { Component, OnInit } from "@angular/core";
import { NavHelperService } from "src/app/services/nav-helper.service";
import { ActivatedRoute } from "@angular/router";
import { Case } from "src/app/models/Case.model";
import { CaseManagerService } from "src/app/services/case-manager.service";
import { BooleanHelper } from 'src/app/utilities/boolean.util';

@Component({
  selector: "app-role-select",
  templateUrl: "./role-select.component.html",
  styleUrls: ["./role-select.component.css"]
})
export class RoleSelectComponent implements OnInit {
  public playerName: string = null;
  private caseId: string = null;

  public get hasPlayerName(): boolean {
    return BooleanHelper.hasValue(this.playerName);
  }

  public get ready(): boolean {
    return this.caseId && this.caseManager.caseReady && this.caseId === this.caseManager.activeCase._id;
  }

  public get witnessCount(): number {
    return this.case.witnessNames.length;
  }

  public get case(): Case {
    return this.caseManager.activeCase;
  }

  constructor(
    private caseManager: CaseManagerService,
    private navHelper: NavHelperService,
    private route: ActivatedRoute
  ) { }

  public ngOnInit() {
    this.loadCase();
  }

  public beJudge() {
    this.caseManager.assignJudgeName(this.playerName);
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
    this.caseId = this.route.snapshot.paramMap.get("id");
    this.caseManager.loadExistingCase(this.caseId);
  }

}
