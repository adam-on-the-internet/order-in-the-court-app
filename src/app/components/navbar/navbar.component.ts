import {Component} from "@angular/core";
import {NavHelperService} from "src/app/services/nav-helper.service";
import {CookieHelper} from "src/app/utilities/cookie.util";
import {EnvUtil} from "../../utilities/env.util";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent {

  public get isLoggedIn(): boolean {
    return CookieHelper.isLoggedOn;
  }

  public get isAdmin(): boolean {
    return CookieHelper.getUserDetails().admin;
  }

  public get nonprod(): boolean {
    return EnvUtil.usingNonprod;
  }

  constructor(
    private navHelper: NavHelperService,
  ) {
  }

  public goToDashboard(): void {
    this.navHelper.goToDashboard();
  }

  public goToJoin(): void {
    this.navHelper.goToCaseSelect();
  }

  public goToExtras(): void {
    this.navHelper.goToExtras();
  }

  public goToCreate(): void {
    this.navHelper.goToCreate();
  }

  public goToProfile(): void {
    this.navHelper.goToProfile();
  }

  public goToAdmin(): void {
    this.navHelper.goToAdmin();
  }

  public logout(): void {
    CookieHelper.removeToken();
    this.navHelper.goToLogin();
  }
}
