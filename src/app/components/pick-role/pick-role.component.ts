import {Component, OnInit} from '@angular/core';
import {Roles} from "../../constants/role.constants";
import {BooleanHelper} from "../../utilities/boolean.util";
import {Case} from "../../models/Case.model";
import {WitnessPlayer} from "../../models/WitnessPlayer.model";
import {CaseManagerService} from "../../services/case-manager.service";
import {NavHelperService} from "../../services/nav-helper.service";
import {ActivatedRoute} from "@angular/router";
import {IdentityService} from "../../services/identity.service";

@Component({
  selector: 'app-pick-role',
  templateUrl: './pick-role.component.html',
  styleUrls: ['./pick-role.component.scss']
})
export class PickRoleComponent implements OnInit {
  private caseId: string = null;

  public get playerName(): string {
    return this.identityManager.playerName;
  }

  private set role(role: Roles) {
    this.caseManager.role = role;
  }

  public get ready(): boolean {
    return this.caseId &&
      this.caseManager.caseReady &&
      this.caseId === this.caseManager.activeCase._id;
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

  public get case(): Case {
    return this.caseManager.activeCase;
  }

  constructor(
    private caseManager: CaseManagerService,
    private identityManager: IdentityService,
    private navHelper: NavHelperService,
    private route: ActivatedRoute
  ) {
  }

  public ngOnInit() {
    this.caseId = this.route.snapshot.paramMap.get("id");
    this.identityManager.role = Roles.UNSELECTED;
    if (this.identityManager.hasPlayerName) {
      this.loadCase();
    } else {
      this.navHelper.pickName(this.caseId);
    }
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
    this.caseManager.assignJuryName(this.playerName);
  }

  private loadCase() {
    this.caseManager.loadExistingCase(this.caseId);
  }

}
