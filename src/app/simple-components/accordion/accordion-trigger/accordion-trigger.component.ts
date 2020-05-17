import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-accordion-trigger',
  templateUrl: './accordion-trigger.component.html',
  styleUrls: ['./accordion-trigger.component.scss']
})
export class AccordionTriggerComponent {
  @Input() public text = "ACCORDION";
  @Input() public areaId = "area";
}
