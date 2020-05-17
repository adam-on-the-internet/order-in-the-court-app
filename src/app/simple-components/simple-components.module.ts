import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccordionAreaComponent} from './accordion/accordion-area/accordion-area.component';
import {AccordionTriggerComponent} from './accordion/accordion-trigger/accordion-trigger.component';
import {ModalBoxAdvancedComponent} from './modal/modal-box-advanced/modal-box-advanced.component';
import {ModalBoxBasicComponent} from './modal/modal-box-basic/modal-box-basic.component';
import {ModalTriggerButtonComponent} from './modal/modal-trigger-button/modal-trigger-button.component';
import {CardComponent} from './card/card.component';
import {BodyComponent} from './body/body.component';
import {HeaderComponent} from './header/header.component';
import {LoadingComponent} from './loading/loading.component';

@NgModule({
  exports: [
    AccordionAreaComponent, AccordionTriggerComponent, ModalBoxAdvancedComponent,
    ModalBoxBasicComponent, ModalTriggerButtonComponent, CardComponent, BodyComponent,
    HeaderComponent, LoadingComponent
  ],
  declarations: [
    AccordionAreaComponent, AccordionTriggerComponent, ModalBoxAdvancedComponent,
    ModalBoxBasicComponent, ModalTriggerButtonComponent, CardComponent, BodyComponent,
    HeaderComponent, LoadingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SimpleComponentsModule {
}
