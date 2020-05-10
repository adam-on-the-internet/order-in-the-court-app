import {Component} from '@angular/core';
import {CaseManagerService} from "../../services/case-manager.service";
import {Case} from "../../models/Case.model";

@Component({
  selector: 'app-case-header',
  templateUrl: './case-header.component.html',
  styleUrls: ['./case-header.component.scss']
})
export class CaseHeaderComponent {

  public get case(): Case {
    return this.caseManagerService.activeCase;
  }

  public get caseLink(): string {
    return `https://order-in-the-court-app.herokuapp.com/courtroom/${this.case._id}`;
  }

  public get ready(): boolean {
    return this.caseManagerService.caseReady;
  }

  constructor(
    private caseManagerService: CaseManagerService,
  ) {
  }

}
