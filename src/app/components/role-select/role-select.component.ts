import { Component, OnInit } from "@angular/core";
import { NavHelperService } from "src/app/services/nav-helper.service";
import { ActivatedRoute } from "@angular/router";
import { Case } from "src/app/models/Case.model";
import { CaseManagerService } from "src/app/services/case-manager.service";
import { BooleanHelper } from "src/app/utilities/boolean.util";

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

  public get hasJudgeName(): boolean {
    return this.caseManager.hasJudgeName;
  }

  public get hasPlaintiffName(): boolean {
    return this.caseManager.hasPlaintiffName;
  }

  public get hasDefendantName(): boolean {
    return this.caseManager.hasDefendantName;
  }

  public get hasAWitness(): boolean {
    return this.caseManager.hasAWitness;
  }

  public get hasMaxWitnesses(): boolean {
    return this.caseManager.hasMaxWitnesses;
  }

  public get allowWitnessToJoin(): boolean {
    return !this.hasMaxWitnesses && this.caseManager.caseUnstarted;
  }

  public get showRejoin(): boolean {
    return this.hasJudgeName;
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

  public bePlaintiff() {
    this.caseManager.assignPlaintiffName(this.playerName);
  }

  public beDefendant() {
    this.caseManager.assignDefendantName(this.playerName);
  }

  public beWitness() {
    this.caseManager.assignWitnessName(this.playerName);
  }

  public beJury() {
    this.navHelper.goToJury(this.case._id);
  }

  public returnJudge() {
    this.navHelper.goToJudge(this.case._id);
  }

  public returnDefendant() {
    this.navHelper.goToDefendant(this.case._id);
  }

  public returnPlaintiff() {
    this.navHelper.goToPlaintiff(this.case._id);
  }

  public returnWitness() {
    this.navHelper.goToWitness(this.case._id);
  }

  private loadCase() {
    this.caseId = this.route.snapshot.paramMap.get("id");
    this.caseManager.loadExistingCase(this.caseId);
  }

}
