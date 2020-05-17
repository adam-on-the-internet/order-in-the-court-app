import {Component} from "@angular/core";
import {NavHelperService} from "../../services/nav-helper.service";

@Component({
  selector: "app-extras",
  templateUrl: "./extras.component.html",
  styleUrls: ["./extras.component.scss"]
})
export class ExtrasComponent {

  constructor(
    private navHelper: NavHelperService,
  ) {
  }

  public goToInfo(): void {
    this.navHelper.goToInfo();
  }

  public goToTips(): void {
    this.navHelper.goToTips();
  }

  public goToRandomContent(): void {
    this.navHelper.goToRandomContent();
  }

  public goToPlaytest(): void {
    this.navHelper.goToPlaytest();
  }

  public goToCredits(): void {
    this.navHelper.goToCredits();
  }

  public goToArchive(): void {
    this.navHelper.goToCaseArchive();
  }

  public goToRules(): void {
    this.navHelper.goToRules();
  }

}
