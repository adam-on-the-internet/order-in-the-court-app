import { Component, OnInit } from "@angular/core";
import { NavHelperService } from "src/app/services/nav-helper.service";

@Component({
  selector: "app-role-select",
  templateUrl: "./role-select.component.html",
  styleUrls: ["./role-select.component.css"]
})
export class RoleSelectComponent implements OnInit {

  constructor(
    private navHelper: NavHelperService,
  ) { }

  public ngOnInit() {

  }

  public beJudge() {
    this.navHelper.goToJudge("abc123");
  }

}
