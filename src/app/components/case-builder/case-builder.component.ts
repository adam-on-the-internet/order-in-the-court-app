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
    if (this.evidenceCountError) {
      myErrors.push("Evidence count must be more than 0 and at most 10.");
    }
    if (this.witnessCountError) {
      myErrors.push("Witness count must be 10 or less.");
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

  private get evidenceCountError(): boolean {
    return !this.evidencePerSideNotSetError &&
      (this.caseOrder.evidenceCount === 0 || this.caseOrder.evidenceCount > 10);
  }

  private get witnessCountError(): boolean {
    return !this.witnessCountNotSetError &&
      (this.caseOrder.witnessCount > 10);
  }

  constructor(
    private caseService: CaseService,
    private navHelper: NavHelperService,
  ) { }

  public ngOnInit() {
    this.loadCaseNames();
    this.setupCaseOrder();
  }

  public setupThreePlayerStandard() {
    this.caseOrder.evidenceCount = 4;
    this.caseOrder.witnessCount = 0;
  }

  public setupFourPlayerStandard() {
    this.caseOrder.evidenceCount = 3;
    this.caseOrder.witnessCount = 2;
  }

  public setupFivePlayerStandard() {
    this.caseOrder.evidenceCount = 3;
    this.caseOrder.witnessCount = 4;
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
