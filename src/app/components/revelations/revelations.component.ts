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

  public get witnesses() {
    const myWitnesses = [];
    const allWitnesses = this.case.revealedWitnesses.concat(this.case.unrevealedWitnesses);
    allWitnesses.forEach((witness) => {
      myWitnesses.push({
        name: "???",
        character: witness.name
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
