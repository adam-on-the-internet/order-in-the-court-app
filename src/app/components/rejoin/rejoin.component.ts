import {Component, OnInit} from '@angular/core';
import {CaseManagerService} from "../../services/case-manager.service";
import {WitnessPlayer} from "../../models/WitnessPlayer.model";
import {IdentityService} from "../../services/identity.service";
import {Roles} from "../../constants/role.constants";
import {NavHelperService} from "../../services/nav-helper.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-rejoin',
  templateUrl: './rejoin.component.html',
  styleUrls: ['./rejoin.component.scss']
})
export class RejoinComponent implements OnInit {

  private caseId: string = null;

  public get ready(): boolean {
    return this.caseId &&
      this.caseManager.caseReady &&
      this.caseId === this.caseManager.activeCase._id;
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

  constructor(
    private caseManager: CaseManagerService,
    private identityManager: IdentityService,
    private navHelper: NavHelperService,
    private route: ActivatedRoute,
  ) {
  }

  public ngOnInit() {
    this.identityManager.playerName = null;
    this.loadCase();
  }

  public returnJudge() {
    this.identityManager.playerName = this.caseManager.activeCase.judgeName;
    this.navHelper.goToJudge(this.caseId);
  }

  public returnDefendant() {
    this.identityManager.playerName = this.caseManager.activeCase.defendantName;
    this.navHelper.goToDefendant(this.caseId);
  }

  public returnPlaintiff() {
    this.identityManager.playerName = this.caseManager.activeCase.plaintiffName;
    this.navHelper.goToPlaintiff(this.caseId);
  }

  public returnWitness(name: string) {
    this.identityManager.playerName = name;
    this.navHelper.goToWitness(this.caseId);
  }

  public returnJury() {
    this.identityManager.playerName = "jury";
    this.navHelper.goToJury(this.caseId);
  }

  private loadCase() {
    this.caseId = this.route.snapshot.paramMap.get("id");
    this.caseManager.loadExistingCase(this.caseId);
  }

}
