import { Component } from "@angular/core";
import { NavHelperService } from "src/app/services/nav-helper.service";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent {

  constructor(
    private navHelper: NavHelperService,
  ) { }

  public manageEvidence() {
    this.navHelper.goToEvidenceOverview();
  }

  public manageWitnesses() {
    this.navHelper.goToWitnessOverview();
  }

  public manageIssues() {
    this.navHelper.goToIssueOverview();
  }

  public manageCases() {
    this.navHelper.goToCaseOverview();
  }

  public manageUsers() {
    this.navHelper.goToUserOverview();
  }

}
