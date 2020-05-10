import { Component } from "@angular/core";
import {CaseManagerService} from "../../services/case-manager.service";
import {Evidence} from "../../models/Evidence.model";

@Component({
  selector: "app-revealed-evidence",
  templateUrl: "./revealed-evidence.component.html",
  styleUrls: ["./revealed-evidence.component.scss"]
})
export class RevealedEvidenceComponent {
  public get revealedPlaintiffEvidence(): Evidence[] {
    return this.caseManager.activeCase.plaintiffEvidenceCourt;
  }

  public get revealedDefendantEvidence(): Evidence[] {
    return this.caseManager.activeCase.defendantEvidenceCourt;
  }

  public get ready(): boolean {
    return this.caseManager.caseReady;
  }

  constructor(
    private caseManager: CaseManagerService,
  ) {
  }

}
