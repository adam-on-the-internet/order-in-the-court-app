import {Component, OnInit} from "@angular/core";
import {WitnessPlayer} from "../../models/WitnessPlayer.model";
import {CaseManagerService} from "../../services/case-manager.service";
import {ActivatedRoute} from "@angular/router";
import {WITNESS_ROLE} from "../../constants/rule.constants";
import {Witness} from "../../models/Witness.model";

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

  public get witnessPool(): Witness[] {
    if (this.witnessNumber === 1) {
      return this.caseManager.activeCase.witnessPool1;
    } else if (this.witnessNumber === 2) {
      return this.caseManager.activeCase.witnessPool2;
    } else if (this.witnessNumber === 3) {
      return this.caseManager.activeCase.witnessPool3;
    } else if (this.witnessNumber === 4) {
      return this.caseManager.activeCase.witnessPool4;
    } else if (this.witnessNumber === 5) {
      return this.caseManager.activeCase.witnessPool5;
    }
    return [];
  }

  public get roleText(): string {
    return WITNESS_ROLE;
  }

  public get caseLoaded(): boolean {
    return this.caseId &&
      this.caseManager.caseReady &&
      this.caseId === this.caseManager.activeCase._id;
  }

  public get showWitnessPool(): boolean {
    const timeToSelect = this.caseManager.statusIsMakeSelections;
    const needToSelect = !this.witnessCharacterSelected;
    return timeToSelect && needToSelect;
  }

  public get witnessCharacterSelected(): boolean {
    if (this.witnessNumber === 1) {
      return this.caseManager.activeCase.selectedWitness1 !== null;
    } else if (this.witnessNumber === 2) {
      return this.caseManager.activeCase.selectedWitness2 !== null;
    } else if (this.witnessNumber === 3) {
      return this.caseManager.activeCase.selectedWitness3 !== null;
    } else if (this.witnessNumber === 4) {
      return this.caseManager.activeCase.selectedWitness4 !== null;
    } else if (this.witnessNumber === 5) {
      return this.caseManager.activeCase.selectedWitness5 !== null;
    }
    return false;
  }

  public get waitingNotForRoles(): boolean {
    const waitingForSelections = this.caseManager.statusIsMakeSelections && !this.showWitnessPool;
    return waitingForSelections ||
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

  public selectWitness(witness: Witness) {
    this.caseManager.selectWitness(this.witnessNumber, witness._id);
  }

  private loadWitnessNumber() {
    this.witnessNumber = Number(this.route.snapshot.paramMap.get("witnessNumber"));
  }

  private loadCase() {
    this.caseId = this.route.snapshot.paramMap.get("id");
    this.caseManager.loadExistingCase(this.caseId);
  }

}
