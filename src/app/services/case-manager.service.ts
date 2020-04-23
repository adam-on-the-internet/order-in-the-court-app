import { Injectable } from "@angular/core";
import { CaseService } from "./case.service";
import { Case } from "../models/Case.model";
import { LogService } from "./log.service";
import { NavHelperService } from "./nav-helper.service";

@Injectable({
  providedIn: "root"
})
export class CaseManagerService {
  public activeCase: Case = null;

  public get caseReady(): boolean {
    return this.activeCase !== null;
  }

  constructor(
    private caseService: CaseService,
    private logService: LogService,
    private navHelper: NavHelperService,
  ) { }

  public createNewCase() {
    this.clearCase();
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
    this.clearCase();
    this.caseService.getSingleCase(id)
      .subscribe((res) => this.activeCase = res,
        (error) => {
          console.log("get case failed");
        });
  }

  private clearCase() {
    this.activeCase = null;
  }
}
