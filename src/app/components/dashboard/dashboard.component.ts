import { Component } from "@angular/core";
import { NavHelperService } from "src/app/services/nav-helper.service";
import { Case } from "src/app/models/Case.model";
import { CaseService } from "src/app/services/case.service";
import { LogService } from "src/app/services/log.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent {

  constructor(
    private navHelper: NavHelperService,
    private caseService: CaseService,
    private logService: LogService,
  ) { }

  public joinCase() {
    this.navHelper.goToCaseSelect();
  }

  public createCase() {
    let newCase: Case;
    this.caseService.create()
      .subscribe((res) => newCase = res,
        (error) => {
          console.log("make case failed");
        }, () => {
          this.logService.log("info", "Case Opened: The Case of the " + newCase.name).subscribe();
          this.navHelper.goToRoleSelect(newCase._id);
        });
  }

  public goToArchive() {
    this.navHelper.goToCaseArchive();
  }

  public goToInfo() {
    this.navHelper.goToInfo();
  }

  public readRules() {
    this.navHelper.goToRules();
  }

}
