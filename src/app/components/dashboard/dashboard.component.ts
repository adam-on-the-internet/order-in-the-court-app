import {Component} from "@angular/core";
import {NavHelperService} from "src/app/services/nav-helper.service";
import {CaseManagerService} from "src/app/services/case-manager.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent {

  constructor(
    private navHelper: NavHelperService,
    private caseManager: CaseManagerService,
  ) {
  }

  public joinCase() {
    this.navHelper.goToCaseSelect();
  }

  public createCase() {
    this.caseManager.createNewCase();
  }

  public goToArchive() {
    this.navHelper.goToCaseArchive();
  }

  public goToInfo() {
    this.navHelper.goToInfo();
  }

  public goToExtras() {
    this.navHelper.goToExtras();
  }

}
