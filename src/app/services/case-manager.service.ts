import { Injectable } from "@angular/core";
import { CaseService } from "./case.service";
import { Case } from "../models/Case.model";
import { LogService } from "./log.service";
import { NavHelperService } from "./nav-helper.service";
import { interval, Subscription } from "rxjs";
import { BooleanHelper } from "../utilities/boolean.util";

@Injectable({
  providedIn: "root"
})
export class CaseManagerService {
  public activeCase: Case = null;
  private caseId: string = null;

  private caseRefresher: Subscription;

  public get caseReady(): boolean {
    return this.activeCase !== null;
  }

  constructor(
    private caseService: CaseService,
    private logService: LogService,
    private navHelper: NavHelperService,
  ) { }

  public createNewCase() {
    let newCase: Case;
    this.caseService.create()
      .subscribe((res) => newCase = res,
        (error) => {
          console.log("make case failed");
        }, () => {
          this.logService.log("info", "Case Opened: The Case of the " + newCase.name).subscribe();
          this.navHelper.goToRoleSelect(newCase._id);
        });
  }

  public loadExistingCase(id: string) {
    if (this.shouldLoadCase(id)) {
      this.startRefresh(id);
    }
  }

  public reset() {
    this.activeCase = null;
    if (BooleanHelper.hasValue(this.caseRefresher)) {
      this.caseRefresher.unsubscribe();
    }
  }

  private startRefresh(id: string) {
    this.caseId = id;
    this.reset();
    this.retrieveCase();
    const source = interval(1000);
    this.caseRefresher = source.subscribe(() => this.retrieveCase());
  }

  private retrieveCase() {
    this.caseService.getSingleCase(this.caseId)
      .subscribe((res) => this.activeCase = res,
        (error) => {
          console.log("get case failed");
        }, () => {
          console.log(`The Case of the ${this.activeCase.name} refreshed`);
        });
  }

  private shouldLoadCase(id: string) {
    if (!this.caseReady) {
      return true;
    }
    const caseAlreadyLoaded = this.activeCase._id === id;
    return !caseAlreadyLoaded;
  }
}
