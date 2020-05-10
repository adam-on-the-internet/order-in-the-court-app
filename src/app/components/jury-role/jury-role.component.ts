import {Component, OnInit} from '@angular/core';
import {CaseManagerService} from "../../services/case-manager.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-jury-role',
  templateUrl: './jury-role.component.html',
  styleUrls: ['./jury-role.component.scss']
})
export class JuryRoleComponent implements OnInit {
  private caseId: string = null;

  public get caseLoaded(): boolean {
    return this.caseId &&
      this.caseManager.caseReady &&
      this.caseId === this.caseManager.activeCase._id;
  }

  public get waiting(): boolean {
    return this.caseManager.statusIsAssignRoles || this.caseManager.statusIsMakeSelections ||
      this.caseManager.statusIsVerdictSelection;
  }

  public get waitMessage(): string {
    return this.caseManager.waitingMessage;
  }

  public get assigningRoles(): boolean {
    return this.caseManager.statusIsAssignRoles;
  }

  public get shouldShowEvidence(): boolean {
    return this.caseManager.shouldShowEvidence;
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
    this.caseManager.removeJuryName("jury");
  }

  private loadCase() {
    this.caseId = this.route.snapshot.paramMap.get("id");
    this.caseManager.loadExistingCase(this.caseId);
  }

}
