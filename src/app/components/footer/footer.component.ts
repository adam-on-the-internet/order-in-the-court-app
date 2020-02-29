import { Component } from "@angular/core";
import { NavHelperService } from "src/app/services/nav-helper.service";
import { CookieHelper } from "src/app/utilities/cookie.util";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent {
  public get isLoggedIn(): boolean {
    return CookieHelper.isLoggedOn;
  }

  public get year(): number {
    return new Date().getFullYear();
  }

  constructor(
    private navHelper: NavHelperService,
  ) { }

  public goToInfo() {
    this.navHelper.goToInfo();
  }

  public goToLogin() {
    this.navHelper.goToLogin();
  }

  public goToAdamOnTheInternet() {
    const url = "http://adamontheinternet.com";
    window.open(url);
  }
}
