import { Component, OnInit } from "@angular/core";
import { BooleanHelper } from "src/app/utilities/boolean.util";
import { ActivatedRoute } from "@angular/router";
import { Case } from "src/app/models/Case.model";
import { Evidence } from "src/app/models/Evidence.model";
import { CaseManagerService } from "src/app/services/case-manager.service";

@Component({
  selector: "app-defendant",
  templateUrl: "./defendant.component.html",
  styleUrls: ["./defendant.component.css"]
})
export class DefendantComponent implements OnInit {
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
    return this.case.unrevealedDefendantEvidence.length > 0 && !this.caseUnstarted;
  }

  constructor(
    private caseManager: CaseManagerService,
    private route: ActivatedRoute
  ) { }

  public ngOnInit() {
    this.loadCase();
  }

  public revealEvidence(evidence: Evidence) {
    this.caseManager.revealDefendantEvidence(evidence._id);
  }

  private loadCase() {
    const id = this.route.snapshot.paramMap.get("id");
    this.caseManager.loadExistingCase(id);
  }

}
