import {Component, OnInit} from "@angular/core";
import {BooleanHelper} from "../../utilities/boolean.util";
import {CaseService} from "../../services/case.service";
import {SortedCases} from "../../models/SortedCases.model";

@Component({
  selector: "app-case-overview",
  templateUrl: "./case-overview.component.html",
  styleUrls: ["./case-overview.component.css"]
})
export class CaseOverviewComponent implements OnInit {
  public sortedCases: SortedCases = null;

  public get ready(): boolean {
    return BooleanHelper.hasValue(this.sortedCases);
  }

  constructor(
    private caseService: CaseService,
  ) {
  }

  public ngOnInit() {
    this.loadAllCases();
  }

  private loadAllCases() {
    this.caseService.getAllCases()
      .subscribe((res) => this.sortedCases = res,
        (error) => {
          console.log("get cases failed");
        });
  }
}
