import { Component, Input } from "@angular/core";

@Component({
  selector: "app-accordion-area",
  templateUrl: "./accordion-area.component.html",
  styleUrls: ["./accordion-area.component.scss"]
})
export class AccordionAreaComponent {
  @Input() public areaId = "area";
  @Input() public show = true;
}
