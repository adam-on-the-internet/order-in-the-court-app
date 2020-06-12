import {Component, OnInit} from "@angular/core";
import {BooleanHelper} from "../../utilities/boolean.util";
import {CaseService} from "../../services/case.service";
import {Case} from "../../models/Case.model";

@Component({
  selector: "app-case-archive",
  templateUrl: "./case-archive.component.html",
  styleUrls: ["./case-archive.component.css"]
})
export class CaseArchiveComponent implements OnInit {
  private closedCases: Case[] = null;

  public get nonCustomClosedCases(): Case[] {
    return this.closedCases.filter((myCase) => {
      return !myCase.isCustom;
    });
  }

  public get ready(): boolean {
    return BooleanHelper.hasValue(this.closedCases);
  }

  constructor(
    private caseService: CaseService,
  ) {
  }

  public ngOnInit() {
    this.loadAllCases();
  }

  private loadAllCases() {
    this.caseService.getClosedCases()
      .subscribe((res) => this.closedCases = res,
        (error) => {
          console.log("get cases failed");
        });
  }
}
