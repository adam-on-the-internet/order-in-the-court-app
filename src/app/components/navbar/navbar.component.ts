import {Component} from "@angular/core";
import {NavHelperService} from "src/app/services/nav-helper.service";
import {CookieHelper} from "src/app/utilities/cookie.util";
import {CaseManagerService} from "../../services/case-manager.service";

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

  public get userEmail(): string {
    if (this.isLoggedIn) {
      return CookieHelper.getUserDetails().email;
    } else {
      return null;
    }
  }

  public get caseSelected(): boolean {
    return this.caseManagerService.caseReady;
  }

  public get caseName(): string {
    return this.caseManagerService.caseName;
  }

  constructor(
    private navHelper: NavHelperService,
    private caseManagerService: CaseManagerService,
  ) {
  }

  public goToDashboard(): void {
    this.navHelper.goToDashboard();
  }

  public goToCase(): void {
    this.navHelper.goToRoleSelect(this.caseManagerService.activeCase._id);
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
