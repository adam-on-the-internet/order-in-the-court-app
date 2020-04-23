import { Component, OnInit } from "@angular/core";
import { NavHelperService } from "src/app/services/nav-helper.service";
import { ActivatedRoute } from "@angular/router";
import { Case } from "src/app/models/Case.model";
import { CaseManagerService } from "src/app/services/case-manager.service";

@Component({
  selector: "app-role-select",
  templateUrl: "./role-select.component.html",
  styleUrls: ["./role-select.component.css"]
})
export class RoleSelectComponent implements OnInit {
  private caseId: string = null;

  public get ready(): boolean {
    return this.caseId && this.caseManager.caseReady && this.caseId === this.caseManager.activeCase._id;
  }

  public get witnessCount(): number {
    return this.case.unrevealedWitnesses.length + this.case.revealedWitnesses.length;
  }

  public get showWitness(): boolean {
    return this.witnessCount > 0;
  }

  public get case(): Case {
    return this.caseManager.activeCase;
  }

  constructor(
    private caseManager: CaseManagerService,
    private navHelper: NavHelperService,
    private route: ActivatedRoute
  ) { }

  public ngOnInit() {
    this.loadCase();
  }

  public beJudge() {
    this.navHelper.goToJudge(this.case._id);
  }

  public beDefendant() {
    this.navHelper.goToDefendant(this.case._id);
  }

  public bePlaintiff() {
    this.navHelper.goToPlaintiff(this.case._id);
  }

  public beWitness() {
    this.navHelper.goToWitness(this.case._id);
  }

  public beJury() {
    this.navHelper.goToJury(this.case._id);
  }

  private loadCase() {
    this.caseId = this.route.snapshot.paramMap.get("id");
    this.caseManager.loadExistingCase(this.caseId);
  }

}
