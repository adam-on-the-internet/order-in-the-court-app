import {Component} from "@angular/core";
import {CaseManagerService} from "../../services/case-manager.service";
import {CaseOptions} from "../../models/CaseOptions.model";
import {BooleanHelper} from "../../utilities/boolean.util";

@Component({
  selector: "app-case-create",
  templateUrl: "./case-create.component.html",
  styleUrls: ["./case-create.component.scss"]
})
export class CaseCreateComponent {
  public caseOptions: CaseOptions = null;
  public customSelected = false;

  public get incomplete(): boolean {
    return this.customSelected && !this.customIssueSet;
  }

  private get customIssueSet(): boolean {
    return BooleanHelper.hasValue(this.caseOptions) &&
      BooleanHelper.hasValue(this.caseOptions.customIssue);
  }

  constructor(
    private caseManagerService: CaseManagerService,
  ) {
  }

  public selectRandom() {
    this.customSelected = false;
    this.caseOptions = null;
  }

  public selectCustom() {
    this.caseOptions = {
      customIssue: "burned down their mansion."
    };
    this.customSelected = true;
  }

  public create() {
    this.caseManagerService.createNewCase(this.caseOptions);
  }

}
