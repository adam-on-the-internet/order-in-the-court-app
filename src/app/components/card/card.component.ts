import { Component, Input } from '@angular/core';
import { BooleanHelper } from 'src/app/utilities/boolean.util';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() public title: string = null;

  public get hasTitle(): boolean {
    return BooleanHelper.hasValue(this.title);
  }
}
