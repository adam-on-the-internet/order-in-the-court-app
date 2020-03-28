import { Component, Input } from "@angular/core";
import { BooleanHelper } from "src/app/utilities/boolean.util";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
  @Input() public title = "Title";
  @Input() public subtitle = null;

  public get hasSubtitle(): boolean {
    return BooleanHelper.hasValue(this.subtitle);
  }
}
