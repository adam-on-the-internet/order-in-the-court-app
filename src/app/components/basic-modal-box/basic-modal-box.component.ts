import {Component, Input} from "@angular/core";

@Component({
  selector: "app-basic-modal-box",
  templateUrl: "./basic-modal-box.component.html",
  styleUrls: ["./basic-modal-box.component.scss"]
})
export class BasicModalBoxComponent {
  @Input() public title = "Modal Title";
  @Input() public boxId = "boxId";
}
