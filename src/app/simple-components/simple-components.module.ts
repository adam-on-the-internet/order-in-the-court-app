import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccordionAreaComponent} from './accordion/accordion-area/accordion-area.component';
import {AccordionTriggerComponent} from './accordion/accordion-trigger/accordion-trigger.component';

@NgModule({
  exports: [
    AccordionAreaComponent, AccordionTriggerComponent
  ],
  declarations: [
    AccordionAreaComponent, AccordionTriggerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SimpleComponentsModule {
}
