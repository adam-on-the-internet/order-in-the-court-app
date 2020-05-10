import {Component, OnInit} from "@angular/core";
import {Case} from "../../models/Case.model";
import {CaseManagerService} from "../../services/case-manager.service";
import {NavHelperService} from "../../services/nav-helper.service";
import {ActivatedRoute} from "@angular/router";
import {Roles} from "../../constants/role.constants";
import {BooleanHelper} from "../../utilities/boolean.util";

@Component({
  selector: "app-courtroom",
  templateUrl: "./courtroom.component.html",
  styleUrls: ["./courtroom.component.scss"]
})
export class CourtroomComponent implements OnInit {
  public playerName: string = null;

  private role: Roles = Roles.UNSELECTED;
  private caseId: string = null;

  private nameLocked = false;
  private roleLocked = false;

  public get ready(): boolean {
    return this.caseId &&
      this.caseManager.caseReady &&
      this.caseId === this.caseManager.activeCase._id;
  }

  public get showNameChoice(): boolean {
    return !this.nameLocked;
  }

  public get showRoleChoice(): boolean {
    return !this.showNameChoice && !this.roleLocked;
  }

  public get waitForOtherRoles(): boolean {
    return !this.showNameChoice && !this.showRoleChoice;
  }

  public get hasPlayerName(): boolean {
    return BooleanHelper.hasValue(this.playerName);
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

  public pickRole() {
    this.roleLocked = true;
    this.caseManager.assignJudgeName(this.playerName);
  }

  public pickJudge() {
    this.role = Roles.JUDGE;
  }

  private loadCase() {
    this.caseId = this.route.snapshot.paramMap.get("id");
    this.caseManager.loadExistingCase(this.caseId);
  }

}
