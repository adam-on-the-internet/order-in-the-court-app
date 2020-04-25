import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-trigger-button',
  templateUrl: './modal-trigger-button.component.html',
  styleUrls: ['./modal-trigger-button.component.scss']
})
export class ModalTriggerButtonComponent {
  @Input() public text = "Open Modal";
  @Input() public boxId = "modalBox";
}
