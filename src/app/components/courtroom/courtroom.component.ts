import { Component, OnInit } from "@angular/core";
import { Case } from "src/app/models/Case.model";
import { CaseService } from "src/app/services/case.service";
import { BooleanHelper } from "src/app/utilities/boolean.util";

@Component({
  selector: "app-courtroom",
  templateUrl: "./courtroom.component.html",
  styleUrls: ["./courtroom.component.css"]
})
export class CourtroomComponent implements OnInit {
  public case: Case = null;
  public error = false;

  public get ready(): boolean {
    return BooleanHelper.hasValue(this.case);
  }

  constructor(
    private caseService: CaseService
  ) { }

  public ngOnInit() {
    this.loadCase();
  }

  private loadCase() {
    this.case = null;
    this.error = false;
    this.caseService.getRandomCase()
      .subscribe((res) => this.case = res,
        (error) => {
          this.error = true;
          console.log("get case failed");
        });
  }

}
