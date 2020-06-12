import {Component, Input} from "@angular/core";

@Component({
  selector: "app-modal-trigger-button",
  templateUrl: "./modal-trigger-button.component.html",
  styleUrls: ["./modal-trigger-button.component.scss"]
})
export class ModalTriggerButtonComponent {
  @Input() public boxId = "modalBox";
  @Input() public block = false;
}
