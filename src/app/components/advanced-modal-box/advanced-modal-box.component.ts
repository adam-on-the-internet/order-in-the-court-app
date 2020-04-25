import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-advanced-modal-box',
  templateUrl: './advanced-modal-box.component.html',
  styleUrls: ['./advanced-modal-box.component.scss']
})
export class AdvancedModalBoxComponent {
  @Input() public title = "Modal Title";
  @Input() public boxId = "boxId";

}
