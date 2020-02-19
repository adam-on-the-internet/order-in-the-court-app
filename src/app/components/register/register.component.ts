import { Component } from "@angular/core";
import { BooleanHelper } from "src/app/utilities/boolean.util";
import { NavHelperService } from "src/app/services/nav-helper.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent {
  public email: string = null;
  public password: string = null;

  public showErrors = false;

  public get errors(): string[] {
    const myErrors = [];
    if (this.emailInvalid) {
      myErrors.push("Please provide an email.");
    }
    return myErrors;
  }

  public get valid(): boolean {
    return this.errors.length === 0;
  }

  private get emailInvalid(): boolean {
    return !BooleanHelper.hasValue(this.email);
  }

  constructor(
    private userService: UserService,
    private navHelper: NavHelperService,
  ) { }

  public submit() {
    this.showErrors = true;
    if (this.valid) {
      this.register();
    }
  }

  private register() {
    let response;
    this.userService.register(this.email)
      .subscribe((res) => response = res,
        (error) => {
          console.log("register failed");
        }, () => {
          this.navHelper.goToDashboard();
        });
  }

}
