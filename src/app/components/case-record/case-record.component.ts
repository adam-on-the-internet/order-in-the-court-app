import {Component} from "@angular/core";
import {CaseManagerService} from "../../services/case-manager.service";

@Component({
  selector: "app-case-record",
  templateUrl: "./case-record.component.html",
  styleUrls: ["./case-record.component.scss"]
})
export class CaseRecordComponent {

  public get logs(): string[] {
    if (this.caseManager.caseReady) {
      return this.caseManager.activeCase.logs;
    } else {
      return [];
    }
  }

  constructor(
    private caseManager: CaseManagerService,
  ) {
  }

}
