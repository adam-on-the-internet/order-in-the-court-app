import { Component, OnInit } from "@angular/core";
import { BooleanHelper } from "src/app/utilities/boolean.util";
import { CaseService } from "src/app/services/case.service";
import { ActivatedRoute } from "@angular/router";
import { Case } from "src/app/models/Case.model";

@Component({
  selector: "app-jury",
  templateUrl: "./jury.component.html",
  styleUrls: ["./jury.component.css"]
})
export class JuryComponent implements OnInit {
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

  private loadCase() {
    const caseId = this.route.snapshot.paramMap.get("id");
    this.case = null;
    this.error = false;
    this.caseService.getSingleCase(caseId)
      .subscribe((res) => this.case = res,
        (error) => {
          this.error = true;
          console.log("get case failed");
        });
  }
}
