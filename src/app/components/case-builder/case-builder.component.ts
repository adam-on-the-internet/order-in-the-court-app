import { Component, OnInit } from "@angular/core";
import { CaseOrder } from "src/app/models/CaseOrder.model";
import { BooleanHelper } from "src/app/utilities/boolean.util";
import { Case } from "src/app/models/Case.model";
import { CaseService } from "src/app/services/case.service";
import { NavHelperService } from "src/app/services/nav-helper.service";
import { LogService } from "src/app/services/log.service";

@Component({
  selector: "app-case-builder",
  templateUrl: "./case-builder.component.html",
  styleUrls: ["./case-builder.component.css"]
})
export class CaseBuilderComponent implements OnInit {
  public caseNames: string[] = null;
  public caseOrder: CaseOrder = null;
  public showErrors = false;
  public typeChosen = false;

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

  public get duplicateNameError(): boolean {
    return !this.caseNameNotSetError && this.caseNames.includes(this.caseOrder.name);
  }

  public get caseNameNotSetError(): boolean {
    return !BooleanHelper.hasValue(this.caseOrder.name);
  }

  public get witnessCountNotSetError(): boolean {
    return !BooleanHelper.hasValue(this.caseOrder.witnessCount);
  }

  public get evidencePerSideNotSetError(): boolean {
    return !BooleanHelper.hasValue(this.caseOrder.evidenceCount);
  }

  public get evidenceCountError(): boolean {
    return !this.evidencePerSideNotSetError &&
      (this.caseOrder.evidenceCount === 0 || this.caseOrder.evidenceCount > 10);
  }

  public get witnessCountError(): boolean {
    return !this.witnessCountNotSetError &&
      (this.caseOrder.witnessCount > 10);
  }

  public get showStepOne(): boolean {
    return this.ready;
  }

  public get showStepTwo(): boolean {
    return this.showStepOne && !this.caseNameNotSetError && !this.duplicateNameError;
  }

  public get showStepThree(): boolean {
    return this.showStepOne && this.showStepTwo && this.typeChosen;
  }

  public get showStepFour(): boolean {
    return this.showStepOne && this.showStepTwo && this.showStepThree
      && !this.evidencePerSideNotSetError && !this.evidenceCountError;
  }

  public get showSubmit(): boolean {
    return this.showStepOne && this.showStepTwo && this.showStepThree && this.showStepFour
      && !this.witnessCountNotSetError && !this.witnessCountError;
  }

  constructor(
    private caseService: CaseService,
    private logService: LogService,
    private navHelper: NavHelperService,
  ) { }

  public ngOnInit() {
    this.loadCaseNames();
    this.setupCaseOrder();
  }

  public useCustomSetup() {
    this.caseOrder.evidenceCount = null;
    this.caseOrder.witnessCount = null;
    this.typeChosen = true;
  }

  public setupThreePlayerStandard() {
    this.caseOrder.evidenceCount = 4;
    this.caseOrder.witnessCount = 0;
    this.typeChosen = true;
  }

  public setupFourPlayerStandard() {
    this.caseOrder.evidenceCount = 3;
    this.caseOrder.witnessCount = 2;
    this.typeChosen = true;
  }

  public setupFivePlayerStandard() {
    this.caseOrder.evidenceCount = 3;
    this.caseOrder.witnessCount = 4;
    this.typeChosen = true;
  }

  public setupSixPlayerStandard() {
    this.caseOrder.evidenceCount = 2;
    this.caseOrder.witnessCount = 6;
    this.typeChosen = true;
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
          this.logService.log("info", "Case Opened: " + this.caseOrder.name).subscribe();
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
