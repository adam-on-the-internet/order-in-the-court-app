import {Component} from "@angular/core";
import {User} from "../../models/User.model";
import {BooleanHelper} from "../../utilities/boolean.util";
import {NavHelperService} from "../../services/nav-helper.service";
import {UserService} from "../../services/user.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent {
  public user: User = null;

  public get ready(): boolean {
    return BooleanHelper.hasValue(this.user);
  }

  constructor(
    private navHelperService: NavHelperService,
    private userService: UserService,
  ) { }

  public ngOnInit() {
    this.loadUser();
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
