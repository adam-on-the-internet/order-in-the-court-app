import {Component, OnInit} from '@angular/core';
import {CaseManagerService} from "../../services/case-manager.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-judge-role',
  templateUrl: './judge-role.component.html',
  styleUrls: ['./judge-role.component.scss']
})
export class JudgeRoleComponent implements OnInit {
  private caseId: string = null;

  public get caseLoaded(): boolean {
    return this.caseId &&
      this.caseManager.caseReady &&
      this.caseId === this.caseManager.activeCase._id;
  }

  public get waiting(): boolean {
    return true;
  }

  public get waitMessage(): string {
    return this.caseManager.waitingMessage;
  }

  public get showRoleLock(): boolean {
    return this.assigningRoles && this.caseManager.essentialNamesSet;
  }

  public get showStructureOptions(): boolean {
    return this.caseManager.statusIsMakeSelections && this.caseManager.allEvidenceSelected;
  }

  public get assigningRoles(): boolean {
    return this.caseManager.statusIsAssignRoles;
  }

  constructor(
    private caseManager: CaseManagerService,
    private route: ActivatedRoute,
  ) {
  }

  public ngOnInit() {
    this.loadCase();
  }

  public backToRoleSelect() {
    this.caseManager.removeJudgeName();
  }

  public lockRoles() {
    this.caseManager.lockRoles();
  }

  public startOpeningArguments() {
    this.caseManager.startOpeningArguments();
  }

  public startFreeTime() {
    this.caseManager.startFreeTime();
  }

  private loadCase() {
    this.caseId = this.route.snapshot.paramMap.get("id");
    this.caseManager.loadExistingCase(this.caseId);
  }

}
