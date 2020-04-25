import { Component, OnInit } from "@angular/core";
import { BooleanHelper } from "src/app/utilities/boolean.util";
import { ActivatedRoute } from "@angular/router";
import { Case } from "src/app/models/Case.model";
import { Evidence } from "src/app/models/Evidence.model";
import { CaseManagerService } from "src/app/services/case-manager.service";
import { PLAINTIFF_ROLE, EVIDENCE_HELP } from 'src/app/constants/rule.constants';

@Component({
  selector: "app-plaintiff",
  templateUrl: "./plaintiff.component.html",
  styleUrls: ["./plaintiff.component.css"]
})
export class PlaintiffComponent implements OnInit {
  public get plaintiffRole(): string {
    return PLAINTIFF_ROLE;
  }

  public get evidenceHelp(): string {
    return EVIDENCE_HELP;
  }

  public get case(): Case {
    return this.caseManager.activeCase;
  }

  public get ready(): boolean {
    return BooleanHelper.hasValue(this.case);
  }

  public get caseUnstarted(): boolean {
    return this.caseManager.caseUnstarted;
  }

  public get showEvidence(): boolean {
    return this.case.unrevealedPlaintiffEvidence.length > 0 && !this.caseUnstarted;
  }

  constructor(
    private caseManager: CaseManagerService,
    private route: ActivatedRoute
  ) { }

  public ngOnInit() {
    this.loadCase();
  }

  public revealEvidence(evidence: Evidence) {
    this.caseManager.revealPlaintiffEvidence(evidence._id);
  }

  private loadCase() {
    const id = this.route.snapshot.paramMap.get("id");
    this.caseManager.loadExistingCase(id);
  }
}
