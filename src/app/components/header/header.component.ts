import { Component, Input } from "@angular/core";
import { BooleanHelper } from "src/app/utilities/boolean.util";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
  @Input() public title = "Title";
  @Input() public icon = null;
  @Input() public subtitle = null;
  @Input() public extraPadding = false;
  @Input() public alt = false;

  public get hasSubtitle(): boolean {
    return BooleanHelper.hasValue(this.subtitle);
  }

  public get hasIcon(): boolean {
    return BooleanHelper.hasValue(this.icon);
  }
}
