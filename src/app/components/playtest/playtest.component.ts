import {Component} from '@angular/core';
import {ContactBody} from "../../models/ContactBody.model";
import {ContactService} from "../../services/contact.service";

@Component({
  selector: 'app-playtest',
  templateUrl: './playtest.component.html',
  styleUrls: ['./playtest.component.scss']
})
export class PlaytestComponent {

  public email: string = null;

  constructor(
    private contactService: ContactService,
  ) {
  }

  public send() {
    let response;
    const contact: ContactBody = {
      subject: `Playtest Request`,
      message: `Playtest Request for ${this.email}`,
      sender: `adamontheinternet@gmail.com`
    };
    this.contactService.contactAOTI(contact)
      .subscribe((res) => response = res);
    this.email = null;
  }

}
