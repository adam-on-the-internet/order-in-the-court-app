import { Component } from "@angular/core";
import { CookieHelper } from "src/app/utilities/cookie.util";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent {

  public get userDetails(): any {
    return CookieHelper.getUserDetails();
  }

  public get email(): any {
    return CookieHelper.email;
  }

  public get admin(): any {
    return CookieHelper.admin;
  }

  public get specialAccess(): any {
    return CookieHelper.specialAccess;
  }

  constructor(
    private userService: UserService,
  ) { }

  public editEmail() {
    const newEmail = prompt("What new email do you want? You will have to logout and login to see the change.");
    if (newEmail) {
      this.performEdit(newEmail);
    }
  }

  public editPassword() {
    const password = prompt("What new password do you want?");
    const confirmPassword = prompt("Confirm your new password.");
    if (password && password === confirmPassword) {
      this.performPasswordUpdate(password, confirmPassword);
    }
  }

  private performEdit(emailToReset: string) {
    let response;
    this.userService.updateEmailSelf(emailToReset)
      .subscribe((res) => response = res,
        (error) => {
          console.log("edit failed");
        }, () => {
          console.log("edit success");
        });
  }

  private performPasswordUpdate(password: string, confirmPassword: string) {
    let response;
    this.userService.resetPasswordManual(password, confirmPassword)
      .subscribe((res) => response = res,
        (error) => {
          console.log("edit failed");
        }, () => {
          console.log("edit success");
        });
  }

}
