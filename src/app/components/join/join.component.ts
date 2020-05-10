import { Component, OnInit } from "@angular/core";
import {CaseManagerService} from "../../services/case-manager.service";
import {ActivatedRoute} from "@angular/router";
import {BooleanHelper} from "../../utilities/boolean.util";
import {Case} from "../../models/Case.model";
import {NavHelperService} from "../../services/nav-helper.service";
import {WitnessPlayer} from "../../models/WitnessPlayer.model";

@Component({
  selector: "app-join",
  templateUrl: "./join.component.html",
  styleUrls: ["./join.component.scss"]
})
export class JoinComponent implements OnInit {
  public playerName: string = null;

  public showRejoin = false;

  private caseId: string = null;
  private nameLocked = false;

  public get caseLoaded(): boolean {
    return this.caseId &&
      this.caseManager.caseReady &&
      this.caseId === this.caseManager.activeCase._id;
  }

  public get hasPlayerName(): boolean {
    return BooleanHelper.hasValue(this.playerName);
  }

  public get assigningRoles(): boolean {
    return this.caseManager.statusIsAssignRoles;
  }

  public get showLateJury(): boolean {
    return !this.assigningRoles && this.showRejoin;
  }

  public get showPickName(): boolean {
    return !this.nameLocked && !this.showRejoin && this.assigningRoles;
  }

  public get showPickRole(): boolean {
    return this.nameLocked && !this.showRejoin && this.assigningRoles;
  }

  public get allowRejoin(): boolean {
    return (this.caseManager.hasAName && !this.showRejoin) || (!this.assigningRoles && !this.showRejoin);
  }

  public get offerJudgeRole(): boolean {
    return !BooleanHelper.hasValue(this.case.judgeName);
  }

  public get offerPlaintiffRole(): boolean {
    return !BooleanHelper.hasValue(this.case.plaintiffName);
  }

  public get offerDefendantRole(): boolean {
    return !BooleanHelper.hasValue(this.case.defendantName);
  }

  public get offerWitnessRole(): boolean {
    return !this.caseManager.hasMaxWitnesses;
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

  public get witnesses(): WitnessPlayer[] {
    return this.caseManager.witnesses;
  }

  private get case(): Case {
    return this.caseManager.activeCase;
  }

  constructor(
    private caseManager: CaseManagerService,
    private navHelper: NavHelperService,
    private route: ActivatedRoute,
  ) { }

  public ngOnInit() {
    this.loadCase();
  }

  public pickName() {
    this.nameLocked = true;
  }

  public openRejoin() {
    this.showRejoin = true;
  }

  public exitRejoin() {
    this.showRejoin = false;
  }

  public pickJudge() {
    this.caseManager.assignJudgeName(this.playerName);
  }

  public pickPlaintiff() {
    this.caseManager.assignPlaintiffName(this.playerName);
  }

  public pickDefendant() {
    this.caseManager.assignDefendantName(this.playerName);
  }

  public pickWitness() {
    this.caseManager.assignWitnessName(this.playerName);
  }

  public pickJury() {
    this.caseManager.assignJuryName(this.playerName);
  }

  public returnJudge() {
    this.navHelper.goToJudge(this.caseId);
  }

  public returnDefendant() {
    this.navHelper.goToDefendant(this.caseId);
  }

  public returnPlaintiff() {
    this.navHelper.goToPlaintiff(this.caseId);
  }

  public returnWitness(name: string) {
    this.navHelper.goToWitness(this.caseId);
  }

  public returnJury() {
    this.navHelper.goToJury(this.caseId);
  }

  private loadCase() {
    this.caseId = this.route.snapshot.paramMap.get("id");
    this.caseManager.loadExistingCase(this.caseId);
  }

}
