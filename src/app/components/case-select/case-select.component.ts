import { Component, OnInit } from "@angular/core";
import { NavHelperService } from 'src/app/services/nav-helper.service';

@Component({
  selector: "app-case-select",
  templateUrl: "./case-select.component.html",
  styleUrls: ["./case-select.component.css"]
})
export class CaseSelectComponent {

  constructor(
    private navHelper: NavHelperService,
  ) { }

  public createCase() {
    this.navHelper.goToCaseBuilder();
  }

}
