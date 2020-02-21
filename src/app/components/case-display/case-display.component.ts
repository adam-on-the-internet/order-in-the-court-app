import { Component, OnInit } from "@angular/core";
import { CaseService } from "src/app/services/case.service";
import { Case } from "src/app/models/Case.model";
import { ActivatedRoute } from "@angular/router";
import { BooleanHelper } from "src/app/utilities/boolean.util";

@Component({
  selector: "app-case-display",
  templateUrl: "./case-display.component.html",
  styleUrls: ["./case-display.component.css"]
})
export class CaseDisplayComponent implements OnInit {
  public case: Case = null;

  public get ready(): boolean {
    return BooleanHelper.notNull(this.case);
  }

  constructor(
    private caseService: CaseService,
    private route: ActivatedRoute,
  ) { }

  public ngOnInit() {
    this.loadCase();
  }

  private loadCase(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.caseService.getSingleCase(id)
      .subscribe((res) => this.case = res,
        (error) => {
          console.log("get case failed");
        });
  }

}
