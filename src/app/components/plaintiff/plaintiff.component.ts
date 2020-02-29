import { Component, OnInit } from "@angular/core";
import { BooleanHelper } from "src/app/utilities/boolean.util";
import { CaseService } from "src/app/services/case.service";
import { ActivatedRoute } from "@angular/router";
import { Case } from "src/app/models/Case.model";
import { Evidence } from 'src/app/models/Evidence.model';

@Component({
  selector: "app-plaintiff",
  templateUrl: "./plaintiff.component.html",
  styleUrls: ["./plaintiff.component.css"]
})
export class PlaintiffComponent implements OnInit {
  public case: Case = null;
  public error = false;

  public get ready(): boolean {
    return BooleanHelper.hasValue(this.case);
  }

  constructor(
    private caseService: CaseService,
    private route: ActivatedRoute
  ) { }

  public ngOnInit() {
    this.loadCase();
  }

  public revealEvidence(evidence: Evidence) {
    this.caseService.revealPlaintiffEvidence(this.case._id, evidence._id)
      .subscribe((res) => this.case = res,
        (error) => {
          this.error = true;
          console.log("reveal evidence failed");
        });
  }

  private loadCase() {
    this.case = null;
    this.error = false;
    const id = this.route.snapshot.paramMap.get("id");
    this.caseService.getSingleCase(id)
      .subscribe((res) => this.case = res,
        (error) => {
          this.error = true;
          console.log("get case failed");
        });
  }
}
