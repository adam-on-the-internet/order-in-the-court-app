import { Component, Input } from "@angular/core";
import { BooleanHelper } from "src/app/utilities/boolean.util";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent {
  @Input() public title: string = null;
  @Input() public subtitle: string = null;
  @Input() public icon: string = null;
  @Input() public autoHeight = true;
  @Input() public useHover = false;
  @Input() public accordionId = null;

  public get useAccordion(): boolean {
    return BooleanHelper.hasValue(this.accordionId);
  }

  public get hasTitle(): boolean {
    return BooleanHelper.hasValue(this.title);
  }

  public get hasSubtitle(): boolean {
    return BooleanHelper.hasValue(this.subtitle);
  }

  public get hasIcon(): boolean {
    return BooleanHelper.hasValue(this.icon);
  }
}
