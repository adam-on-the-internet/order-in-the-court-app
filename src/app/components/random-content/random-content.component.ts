import {Component, OnInit} from "@angular/core";
import {EvidenceService} from "../../services/evidence.service";
import {WitnessService} from "../../services/witness.service";
import {IssueService} from "../../services/issue.service";
import {Evidence} from "../../models/Evidence.model";
import {BooleanHelper} from "../../utilities/boolean.util";
import {Issue} from "../../models/Issue.model";
import {Witness} from "../../models/Witness.model";
import {ContactService} from "../../services/contact.service";
import {ContactBody} from "../../models/ContactBody.model";

@Component({
  selector: "app-random-content",
  templateUrl: "./random-content.component.html",
  styleUrls: ["./random-content.component.scss"]
})
export class RandomContentComponent implements OnInit {
  public evidences: Evidence[] = null;
  public issues: Issue[] = null;
  public witnesses: Witness[] = null;

  public suggestion: string = null;
  public suggestionType: string = null;

  public get ready(): boolean {
    return BooleanHelper.allHaveValue([this.evidences, this.witnesses, this.issues]);
  }

  constructor(
    private evidenceService: EvidenceService,
    private witnessService: WitnessService,
    private issueService: IssueService,
    private contactService: ContactService,
  ) {
  }

  public ngOnInit() {
    this.loadAllContent();
  }

  private loadAllContent() {
    this.witnessService.getWitness()
      .subscribe((res) => this.witnesses = res);
    this.issueService.getIssue()
      .subscribe((res) => this.issues = res);
    this.evidenceService.getEvidence()
      .subscribe((res) => this.evidences = res);
  }

  public updateSuggestion(event) {
    this.suggestion = event.target.value;
  }

  public setSuggestionType(type: string) {
    this.suggestionType = type;
    this.suggestion = null;
  }

  public send() {
    let response;
    const contact: ContactBody = {
      message: `Order in the Court Suggestion - ${this.suggestionType} - ${this.suggestion}`,
      sender: `adamontheinternet@gmail.com`
    };
    this.contactService.contactAOTI(contact)
      .subscribe((res) => response = res);
    this.suggestion = null;
  }

}
