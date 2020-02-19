import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { BooleanHelper } from "src/app/utilities/boolean.util";
import { User } from "src/app/models/User.model";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent implements OnInit {
  public users: User[] = null;

  public get ready(): boolean {
    return BooleanHelper.hasValue(this.users);
  }

  constructor(
    private userService: UserService,
  ) { }

  public ngOnInit() {
    this.loadUsers();
  }

  public toggleAdmin(user: User) {
    let dialogText;
    if (user.admin) {
      dialogText = `Are you sure you want to remove the admin rights for ${user.email}?`;
    } else {
      dialogText = `Are you sure you want to give admin rights to ${user.email}?`;
    }
    const confirmToggle = confirm(dialogText);
    if (confirmToggle) {
      this.submitToggleAdmin(user);
    }
  }

  public setSpecialAccess(user: User) {
    const newAccess = prompt(`Access is currently: ${user.specialAccess}. What would you like to change it to?`);
    if (newAccess) {
      this.editAccess(user, newAccess);
    }
  }

  public deleteUser(user: User) {
    const confirmDelete = confirm(`Are you sure you want to delete ${user.email}?`);
    if (confirmDelete) {
      this.submitDelete(user);
    }
  }

  private editAccess(user: User, newAccess: string) {
    let response;
    this.userService.editAccess(user.email, newAccess)
      .subscribe((res) => response = res,
        (error) => {
          console.log(error);
          console.log("edit access failed");
        }, () => {
          this.loadUsers();
        });
  }

  private submitDelete(user: User) {
    let response;
    this.userService.deleteUser(user._id)
      .subscribe((res) => response = res,
        (error) => {
          console.log(error);
          console.log("delete user failed");
        }, () => {
          this.loadUsers();
        });
  }

  private submitToggleAdmin(user: User) {
    let response;
    this.userService.setAdmin(user.email, !user.admin)
      .subscribe((res) => response = res,
        (error) => {
          console.log(error);
          console.log("edit admin failed");
        }, () => {
          this.loadUsers();
        });
  }

  private loadUsers(): void {
    this.users = null;
    this.userService.getAllUsers()
      .subscribe((res) => this.users = res,
        (error) => {
          console.log("get users failed");
        });
  }

}
