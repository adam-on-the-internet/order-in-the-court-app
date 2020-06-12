import {Component, OnInit} from "@angular/core";
import {BooleanHelper} from "src/app/utilities/boolean.util";
import {ActivatedRoute} from "@angular/router";
import {CaseManagerService} from "../../services/case-manager.service";
import {ContactService} from "../../services/contact.service";
import {ContactBody} from "../../models/ContactBody.model";

@Component({
  selector: "app-archived-case",
  templateUrl: "./archived-case.component.html",
  styleUrls: ["./archived-case.component.scss"]
})
export class ArchivedCaseComponent implements OnInit {
  public caseId: string = null;

  public message: string = null;
  public email: string = null;

  public get ready(): boolean {
    return BooleanHelper.hasValue(this.caseId);
  }

  public get showFeedbackPrompt(): boolean {
    return this.contactService.showFeedbackPrompt;
  }

  constructor(
    private route: ActivatedRoute,
    private caseManager: CaseManagerService,
    private contactService: ContactService,
  ) {
  }

  public ngOnInit() {
    this.loadCase();
  }

  public submitFeedback() {
    const contact: ContactBody = {
      subject: `Order in the Court Feedback`,
      message: `Feedback from ${this.email}: ${this.message}`,
      sender: `adamontheinternet@gmail.com`
    };
    this.contactService.contactAOTI(contact)
      .subscribe();
    this.email = null;
    this.message = null;
  }

  public hidePrompt() {
    this.contactService.hidePrompt();
  }

  private loadCase() {
    this.caseId = this.route.snapshot.paramMap.get("id");
    this.caseManager.loadExistingCase(this.caseId);
  }

}
