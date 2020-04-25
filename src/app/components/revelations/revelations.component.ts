import { Component, Input, OnInit } from "@angular/core";
import { Case } from "src/app/models/Case.model";
import { BooleanHelper } from "src/app/utilities/boolean.util";
import { CaseManagerService } from "src/app/services/case-manager.service";

@Component({
  selector: "app-revelations",
  templateUrl: "./revelations.component.html",
  styleUrls: ["./revelations.component.css"]
})
export class RevelationsComponent implements OnInit {
  @Input() public caseId: string = null;

  public get case(): Case {
    return this.caseManager.activeCase;
  }

  public get caseClosed(): boolean {
    return this.caseManager.caseClosed;
  }

  public get caseStarted(): boolean {
    return this.caseManager.caseStarted;
  }

  public get ready(): boolean {
    return BooleanHelper.hasValue(this.case);
  }

  public get judgeName(): string {
    return "???";
  }

  public get defendantName(): string {
    return "???";
  }

  public get plaintiffName(): string {
    return "???";
  }

  public get witnessesPresent(): boolean {
    return this.witnesses.length > 0;
  }

  public get witnesses() {
    const myWitnesses = [];
    this.case.witnessNames.forEach((witness, i) => {
      myWitnesses.push({
        name: witness,
        character: this.case.witnesses[i],
      });
    });
    return myWitnesses;
  }

  constructor(
    private caseManager: CaseManagerService,
  ) { }

  public ngOnInit() {
    if (this.caseId) {
      this.caseManager.loadExistingCase(this.caseId);
    }
  }
}
