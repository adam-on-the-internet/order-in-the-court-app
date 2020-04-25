import { Component, OnInit } from "@angular/core";
import { BooleanHelper } from "src/app/utilities/boolean.util";
import { ActivatedRoute } from "@angular/router";
import { Case } from "src/app/models/Case.model";
import { CaseManagerService } from "src/app/services/case-manager.service";
import { JURY_ROLE } from "src/app/constants/rule.constants";

@Component({
  selector: "app-jury",
  templateUrl: "./jury.component.html",
  styleUrls: ["./jury.component.css"]
})
export class JuryComponent implements OnInit {
  public get juryRole(): string {
    return JURY_ROLE;
  }

  public get case(): Case {
    return this.caseManager.activeCase;
  }

  public get caseUnstarted(): boolean {
    return this.caseManager.caseUnstarted;
  }

  public get ready(): boolean {
    return BooleanHelper.hasValue(this.case);
  }

  constructor(
    private caseManager: CaseManagerService,
    private route: ActivatedRoute
  ) { }

  public ngOnInit() {
    this.loadCase();
  }

  private loadCase() {
    const id = this.route.snapshot.paramMap.get("id");
    this.caseManager.loadExistingCase(id);
  }
}
