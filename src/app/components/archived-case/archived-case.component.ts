import { Component, OnInit } from "@angular/core";
import { BooleanHelper } from "src/app/utilities/boolean.util";
import { Case } from "src/app/models/Case.model";
import { CaseService } from "src/app/services/case.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-archived-case",
  templateUrl: "./archived-case.component.html",
  styleUrls: ["./archived-case.component.scss"]
})
export class ArchivedCaseComponent implements OnInit {
  public case: Case = null;
  public caseId: string = null;

  public get ready(): boolean {
    return BooleanHelper.hasValue(this.caseId);
  }

  constructor(
    private route: ActivatedRoute
  ) { }

  public ngOnInit() {
    this.loadCase();
  }

  private loadCase() {
    this.caseId = this.route.snapshot.paramMap.get("id");
  }

}
