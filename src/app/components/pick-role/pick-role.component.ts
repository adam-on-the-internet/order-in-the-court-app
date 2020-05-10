import {Component, OnInit} from '@angular/core';
import {BooleanHelper} from "../../utilities/boolean.util";
import {Case} from "../../models/Case.model";
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

  public get showRejoin(): boolean {
    return this.caseManager.hasAName;
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
      this.loadCase();

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

  public rejoin() {
    this.navHelper.rejoin(this.caseId);
  }

  private loadCase() {
    this.caseManager.loadExistingCase(this.caseId);
  }

}
