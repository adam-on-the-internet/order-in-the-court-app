import {Component, OnInit} from "@angular/core";
import {Case} from "../../models/Case.model";
import {CaseManagerService} from "../../services/case-manager.service";
import {NavHelperService} from "../../services/nav-helper.service";
import {ActivatedRoute} from "@angular/router";
import {Roles} from "../../constants/role.constants";
import {BooleanHelper} from "../../utilities/boolean.util";
import {WitnessPlayer} from "../../models/WitnessPlayer.model";

@Component({
  selector: "app-courtroom",
  templateUrl: "./courtroom.component.html",
  styleUrls: ["./courtroom.component.scss"]
})
export class CourtroomComponent implements OnInit {
  public playerName: string = null;
  public nameLocked = false;

  private get role(): Roles {
    return null;
  }

  private set role(role: Roles) {

  }

  private caseId: string = null;

  public get waitMessage(): string {
    if (!this.ready) {
      return "Loading case...";
    } else if (!this.caseManager.rolesCanBeLocked) {
      return "Waiting for more players to join...";
    } else {
      return "Waiting for The Judge to continue...";
    }
  }

  public get ready(): boolean {
    return this.caseId &&
      this.caseManager.caseReady &&
      this.caseId === this.caseManager.activeCase._id;
  }

  public get showLockOption(): boolean {
    return this.caseManager.rolesCanBeLocked;
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

  public get showRejoin(): boolean {
    return this.hasJudgeName || this.hasPlaintiffName || this.hasDefendantName || this.hasAWitness;
  }

  public get showNameChoice(): boolean {
    return !this.nameLocked;
  }

  public get showRoleChoice(): boolean {
    return !this.showNameChoice && !this.hasValidRole;
  }

  public get waitForOtherRoles(): boolean {
    return !this.showNameChoice && !this.showRoleChoice;
  }

  public get hasPlayerName(): boolean {
    return BooleanHelper.hasValue(this.playerName);
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

  public get assigningRoles(): boolean {
    return this.caseManager.statusIsAssignRoles;
  }

  public get hasValidRole(): boolean {
    return BooleanHelper.hasValue(this.role) && this.role !== Roles.UNSELECTED;
  }

  public get case(): Case {
    return this.caseManager.activeCase;
  }

  public get caseLink(): string {
    return `https://order-in-the-court-app.herokuapp.com/courtroom/${this.case._id}`;
  }

  public get witnesses(): WitnessPlayer[] {
    return this.caseManager.witnesses;
  }

  constructor(
    private caseManager: CaseManagerService,
    private navHelper: NavHelperService,
    private route: ActivatedRoute
  ) {
  }

  public ngOnInit() {
    this.loadCase();
  }

  public pickName() {
    this.nameLocked = true;
  }

  public pickJudge() {
    this.role = Roles.JUDGE;
    this.caseManager.assignJudgeName(this.playerName);
  }

  public pickPlaintiff() {
    this.role = Roles.PLAINTIFF;
    this.caseManager.assignPlaintiffName(this.playerName);
  }

  public pickDefendant() {
    this.role = Roles.DEFENDANT;
    this.caseManager.assignDefendantName(this.playerName);
  }

  public pickWitness() {
    this.role = Roles.WITNESS;
    this.caseManager.assignWitnessName(this.playerName);
  }

  public pickJury() {
    this.role = Roles.JURY;
  }

  public lockRoles() {
    this.caseManager.lockRoles();
  }

  public unselectRole() {
    if (this.role === Roles.JUDGE) {
      this.caseManager.removeJudgeName();
    } else if (this.role === Roles.PLAINTIFF) {
      this.caseManager.removePlaintiffName();
    } else if (this.role === Roles.DEFENDANT) {
      this.caseManager.removeDefendantName();
    } else if (this.role === Roles.WITNESS) {
      this.caseManager.removeWitnessName(this.playerName);
    }

    this.role = Roles.UNSELECTED;
  }

  public returnJudge() {
    this.playerName = this.caseManager.activeCase.judgeName;
    this.nameLocked = true;
    this.pickJudge();
  }

  public returnDefendant() {
    this.playerName = this.caseManager.activeCase.defendantName;
    this.nameLocked = true;
    this.pickDefendant();
  }

  public returnPlaintiff() {
    this.playerName = this.caseManager.activeCase.plaintiffName;
    this.nameLocked = true;
    this.pickPlaintiff();
  }

  public returnWitness(name: string) {
    this.playerName = name;
    this.nameLocked = true;
    this.pickWitness();
  }

  public returnJury() {
    this.nameLocked = true;
    this.pickJury();
  }

  private loadCase() {
    this.caseId = this.route.snapshot.paramMap.get("id");
    this.caseManager.loadExistingCase(this.caseId);
  }

}
