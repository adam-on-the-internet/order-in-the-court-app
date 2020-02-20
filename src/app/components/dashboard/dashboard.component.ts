import { Component, OnInit } from "@angular/core";
import { Case } from "src/app/models/Case.model";
import { CaseService } from "src/app/services/case.service";
import { BooleanHelper } from "src/app/utilities/boolean.util";
import { NavHelperService } from "src/app/services/nav-helper.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  public cases: Case[] = null;
  public error = false;

  public get ready(): boolean {
    return BooleanHelper.hasValue(this.cases);
  }

  constructor(
    private caseService: CaseService,
    private navHelper: NavHelperService,
  ) { }

  public ngOnInit() {
    this.loadCases();
  }

  public goToCourtroom(myCase: Case) {
      this.navHelper.goToCourtroom(myCase._id);
  }

  private loadCases() {
    this.cases = null;
    this.error = false;
    this.caseService.getAllCases()
      .subscribe((res) => this.cases = res,
        (error) => {
          this.error = true;
          console.log("get case failed");
        });
  }
}
