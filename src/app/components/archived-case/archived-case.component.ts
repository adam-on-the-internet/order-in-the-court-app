import {Component, OnInit} from "@angular/core";
import {BooleanHelper} from "src/app/utilities/boolean.util";
import {Case} from "src/app/models/Case.model";
import {ActivatedRoute} from "@angular/router";
import {CaseManagerService} from "../../services/case-manager.service";

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
    private route: ActivatedRoute,
    private caseManager: CaseManagerService,
  ) {
  }

  public ngOnInit() {
    this.loadCase();
  }

  private loadCase() {
    this.caseId = this.route.snapshot.paramMap.get("id");
    this.caseManager.loadExistingCase(this.caseId);
  }

}
