import {Component, Input} from "@angular/core";

@Component({
  selector: "app-modal-box-basic",
  templateUrl: "./modal-box-basic.component.html",
  styleUrls: ["./modal-box-basic.component.scss"]
})
export class ModalBoxBasicComponent {
  @Input() public title = "Modal Title";
  @Input() public boxId = "boxId";
}
