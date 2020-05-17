import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-modal-box-advanced',
  templateUrl: './modal-box-advanced.component.html',
  styleUrls: ['./modal-box-advanced.component.scss']
})
export class ModalBoxAdvancedComponent {
  @Input() public title = "Modal Title";
  @Input() public boxId = "boxId";
}
