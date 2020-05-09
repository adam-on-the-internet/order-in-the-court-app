import { Component } from "@angular/core";
import {CaseManagerService} from "../../services/case-manager.service";

@Component({
  selector: "app-case-create",
  templateUrl: "./case-create.component.html",
  styleUrls: ["./case-create.component.scss"]
})
export class CaseCreateComponent {

  constructor(
    private caseManagerService: CaseManagerService,
  ) { }

  public create() {
    this.caseManagerService.createNewCase();
  }

}
