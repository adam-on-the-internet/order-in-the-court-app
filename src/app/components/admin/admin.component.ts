import { Component } from "@angular/core";
import { NavHelperService } from "src/app/services/nav-helper.service";
import { ServiceUrl } from "src/app/constants/rest.constants";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent {
  public basicExpressServiceUrl = ServiceUrl.BasicExpress;

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

}
