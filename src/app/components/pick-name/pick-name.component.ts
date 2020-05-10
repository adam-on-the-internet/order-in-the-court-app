import { Component, OnInit } from '@angular/core';
import {CaseManagerService} from "../../services/case-manager.service";
import {NavHelperService} from "../../services/nav-helper.service";
import {ActivatedRoute} from "@angular/router";
import {BooleanHelper} from "../../utilities/boolean.util";
import {IdentityService} from "../../services/identity.service";

@Component({
  selector: 'app-pick-name',
  templateUrl: './pick-name.component.html',
  styleUrls: ['./pick-name.component.scss']
})
export class PickNameComponent implements OnInit {
  public playerName: string = null;

  private caseId: string = null;

  public get ready(): boolean {
    return this.caseId &&
      this.caseManager.caseReady &&
      this.caseId === this.caseManager.activeCase._id;
  }

  public get hasPlayerName(): boolean {
    return BooleanHelper.hasValue(this.playerName);
  }

  public get canRejoin(): boolean {
    return this.caseManager.hasAName;
  }

  constructor(
    private caseManager: CaseManagerService,
    private navHelper: NavHelperService,
    private identityService: IdentityService,
    private route: ActivatedRoute
  ) {
  }

  public ngOnInit() {
    this.loadCase();
  }

  public pickName() {
    this.identityService.playerName = this.playerName;
    this.navHelper.pickRole(this.caseId);
  }

  public rejoin() {
    this.navHelper.rejoin(this.caseId);
  }

  private loadCase() {
    this.caseId = this.route.snapshot.paramMap.get("id");
    this.caseManager.loadExistingCase(this.caseId);
  }

}
