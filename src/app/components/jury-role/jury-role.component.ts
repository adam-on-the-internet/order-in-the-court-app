import {Component, OnInit} from "@angular/core";
import {CaseManagerService} from "../../services/case-manager.service";
import {ActivatedRoute} from "@angular/router";
import {JURY_ROLE} from "../../constants/rule.constants";

@Component({
  selector: "app-jury-role",
  templateUrl: "./jury-role.component.html",
  styleUrls: ["./jury-role.component.scss"]
})
export class JuryRoleComponent implements OnInit {
  private caseId: string = null;

  public get caseLoaded(): boolean {
    return this.caseId &&
      this.caseManager.caseReady &&
      this.caseId === this.caseManager.activeCase._id;
  }

  public get waitingNotForRoles(): boolean {
    return this.caseManager.statusIsMakeSelections ||
      this.caseManager.statusIsVerdictSelection;
  }

  public get waitingForRoles(): boolean {
    return this.caseManager.statusIsAssignRoles;
  }

  public get roleText(): string {
    return JURY_ROLE;
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
