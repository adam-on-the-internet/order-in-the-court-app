import {Component, OnInit} from "@angular/core";
import {EvidenceService} from "../../services/evidence.service";
import {WitnessService} from "../../services/witness.service";
import {IssueService} from "../../services/issue.service";
import {Evidence} from "../../models/Evidence.model";
import {BooleanHelper} from "../../utilities/boolean.util";
import {Issue} from "../../models/Issue.model";
import {Witness} from "../../models/Witness.model";

@Component({
  selector: "app-random-content",
  templateUrl: "./random-content.component.html",
  styleUrls: ["./random-content.component.scss"]
})
export class RandomContentComponent implements OnInit {
  public evidences: Evidence[] = null;
  public issues: Issue[] = null;
  public witnesses: Witness[] = null;

  public get ready(): boolean {
    return BooleanHelper.allHaveValue([this.evidences, this.witnesses, this.issues]);

  }

  constructor(
    private evidenceService: EvidenceService,
    private witnessService: WitnessService,
    private issueService: IssueService,
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

}
