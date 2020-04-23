import { Component } from "@angular/core";
import { CaseManagerService } from "src/app/services/case-manager.service";

@Component({
  selector: "app-case-select",
  templateUrl: "./case-select.component.html",
  styleUrls: ["./case-select.component.css"]
})
export class CaseSelectComponent {

  constructor(
    private caseManager: CaseManagerService,
  ) { }

  public createCase() {
    this.caseManager.createNewCase();
  }

}
