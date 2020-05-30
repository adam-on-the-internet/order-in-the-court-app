import {Component, OnInit} from "@angular/core";
import {User} from "../../models/User.model";
import {BooleanHelper} from "../../utilities/boolean.util";
import {UserService} from "../../services/user.service";
import {NavHelperService} from "../../services/nav-helper.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  public user: User = null;

  public get ready(): boolean {
    return BooleanHelper.hasValue(this.user);
  }

  constructor(
    private userService: UserService,
    private navHelper: NavHelperService,
  ) {
  }

  public ngOnInit() {
    this.loadUser();
  }

  public goAdmin() {
    this.navHelper.goToAdmin();
  }

  private loadUser(): void {
    this.user = null;
    this.userService.getUserSelf()
      .subscribe((res) => this.user = res,
        (error) => {
          console.log("get user failed");
        });
  }

}
