import { Component, Input } from "@angular/core";
import { Case } from "src/app/models/Case.model";
import { BooleanHelper } from "src/app/utilities/boolean.util";

@Component({
  selector: "app-revelations",
  templateUrl: "./revelations.component.html",
  styleUrls: ["./revelations.component.css"]
})
export class RevelationsComponent {
  @Input() case: Case = null;

  public get show(): boolean {
    return BooleanHelper.hasValue(this.case);
  }
}
