import {Component, OnInit} from "@angular/core";
import {WitnessPlayer} from "../../models/WitnessPlayer.model";
import {CaseManagerService} from "../../services/case-manager.service";
import {ActivatedRoute} from "@angular/router";
import {WITNESS_ROLE} from "../../constants/rule.constants";

@Component({
  selector: "app-witness-role",
  templateUrl: "./witness-role.component.html",
  styleUrls: ["./witness-role.component.scss"]
})
export class WitnessRoleComponent implements OnInit {
  private caseId: string = null;
  private witnessNumber: number = null;

  public get myWitness(): WitnessPlayer {
    return this.caseManager.witnesses.find((witness) => {
      return witness.witnessNumber === this.witnessNumber;
    });
  }

  public get roleText(): string {
    return WITNESS_ROLE;
  }

  public get caseLoaded(): boolean {
    return this.caseId &&
      this.caseManager.caseReady &&
      this.caseId === this.caseManager.activeCase._id;
  }

  public get waiting(): boolean {
    return this.caseManager.statusIsAssignRoles || this.caseManager.statusIsMakeSelections ||
      this.caseManager.statusIsVerdictSelection;
  }

  public get waitingNotForRoles(): boolean {
    return this.caseManager.statusIsMakeSelections ||
      this.caseManager.statusIsVerdictSelection;
  }

  public get waitingForRoles(): boolean {
    return this.caseManager.statusIsAssignRoles;
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

  public get witnesses(): WitnessPlayer[] {
    return this.caseManager.witnesses;
  }

  constructor(
    private caseManager: CaseManagerService,
    private route: ActivatedRoute,
  ) {
  }

  public ngOnInit() {
    this.loadWitnessNumber();
    this.loadCase();
  }

  public backToRoleSelect() {
    this.caseManager.removeWitnessName(this.witnessNumber);
  }

  private loadWitnessNumber() {
    this.witnessNumber = Number(this.route.snapshot.paramMap.get("witnessNumber"));
  }

  private loadCase() {
    this.caseId = this.route.snapshot.paramMap.get("id");
    this.caseManager.loadExistingCase(this.caseId);
  }

}
