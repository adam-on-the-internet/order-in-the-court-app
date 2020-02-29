import { Component, OnInit } from "@angular/core";
import { BooleanHelper } from "src/app/utilities/boolean.util";
import { CaseService } from "src/app/services/case.service";
import { ActivatedRoute } from "@angular/router";
import { Case } from "src/app/models/Case.model";
import { Witness } from "src/app/models/Witness.model";

@Component({
  selector: "app-witness",
  templateUrl: "./witness.component.html",
  styleUrls: ["./witness.component.css"]
})
export class WitnessComponent implements OnInit {
  public case: Case = null;
  public error = false;

  public get ready(): boolean {
    return BooleanHelper.hasValue(this.case);
  }

  constructor(
    private caseService: CaseService,
    private route: ActivatedRoute
  ) { }

  public ngOnInit() {
    this.loadCase();
  }

  public revealWitness(witness: Witness) {
    this.caseService.revealWitness(this.case._id, witness._id)
      .subscribe((res) => this.case = res,
        (error) => {
          this.error = true;
          console.log("reveal witness failed");
        });
  }

  private loadCase() {
    this.case = null;
    this.error = false;
    const id = this.route.snapshot.paramMap.get("id");
    this.caseService.getSingleCase(id)
      .subscribe((res) => this.case = res,
        (error) => {
          this.error = true;
          console.log("get case failed");
        });
  }

}
