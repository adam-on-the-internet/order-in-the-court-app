import { Component, OnInit } from "@angular/core";
import { CaseOrder } from "src/app/models/CaseOrder.model";
import { BooleanHelper } from "src/app/utilities/boolean.util";
import { Case } from "src/app/models/Case.model";
import { CaseService } from "src/app/services/case.service";
import { NavHelperService } from "src/app/services/nav-helper.service";

@Component({
  selector: "app-case-builder",
  templateUrl: "./case-builder.component.html",
  styleUrls: ["./case-builder.component.css"]
})
export class CaseBuilderComponent implements OnInit {
  public caseNames: string[] = null;
  public caseOrder: CaseOrder = null;
  public showErrors = false;

  public get ready(): boolean {
    return BooleanHelper.hasValue(this.caseNames) && BooleanHelper.hasValue(this.caseOrder);
  }

  public get valid(): boolean {
    return this.errors.length === 0;
  }

  public get errors(): string[] {
    const myErrors = [];
    if (this.duplicateNameError) {
      myErrors.push("This case name is already taken.");
    }
    if (this.caseNameNotSetError) {
      myErrors.push("Please provide a case name.");
    }
    if (this.witnessCountNotSetError) {
      myErrors.push("Please provide a witness count.");
    }
    if (this.evidencePerSideNotSetError) {
      myErrors.push("Please provide a count of evidence for each side.");
    }
    return myErrors;
  }

  private get duplicateNameError(): boolean {
    return !this.caseNameNotSetError && this.caseNames.includes(this.caseOrder.name);
  }

  private get caseNameNotSetError(): boolean {
    return !BooleanHelper.hasValue(this.caseOrder.name);
  }

  private get witnessCountNotSetError(): boolean {
    return !BooleanHelper.hasValue(this.caseOrder.witnessCount);
  }

  private get evidencePerSideNotSetError(): boolean {
    return !BooleanHelper.hasValue(this.caseOrder.evidenceCount);
  }

  constructor(
    private caseService: CaseService,
    private navHelper: NavHelperService,
  ) { }

  public ngOnInit() {
    this.loadCaseNames();
    this.setupCaseOrder();
  }

  public submit() {
    if (this.valid) {
      this.submitCase();
    } else {
      this.showErrors = true;
    }
  }

  private setupCaseOrder() {
    this.caseOrder = {
      name: null,
      witnessCount: null,
      evidenceCount: null,
    };
  }

  private submitCase() {
    let newCase: Case;
    this.caseService.makeACase(this.caseOrder)
      .subscribe((res) => newCase = res,
        (error) => {
          console.log("make case failed");
        }, () => {
          this.navHelper.goToRoleSelect(newCase._id);
        });
  }

  private loadCaseNames() {
    this.caseNames = null;
    this.caseService.getAllCaseNames()
      .subscribe((res) => this.caseNames = res,
        (error) => {
          console.log("get case failed");
        });
  }

}
