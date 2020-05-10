import { Component, OnInit } from "@angular/core";
import {DEFENDANT_ROLE, JUDGE_ROLE, JURY_ROLE, PLAINTIFF_ROLE, WITNESS_ROLE} from "../../constants/rule.constants";
import {BooleanHelper} from "../../utilities/boolean.util";
import {Case} from "../../models/Case.model";
import {CaseManagerService} from "../../services/case-manager.service";
import {NavHelperService} from "../../services/nav-helper.service";
import {ActivatedRoute} from "@angular/router";
import {Roles} from "../../constants/role.constants";

@Component({
  selector: "app-courtroom",
  templateUrl: "./courtroom.component.html",
  styleUrls: ["./courtroom.component.scss"]
})
export class CourtroomComponent implements OnInit {
  public playerName: string = null;

  private role: Roles = Roles.UNSELECTED;
  private caseId: string = null;

  public get ready(): boolean {
    return this.caseId && this.caseManager.caseReady && this.caseId === this.caseManager.activeCase._id;
  }

  public get case(): Case {
    return this.caseManager.activeCase;
  }

  constructor(
    private caseManager: CaseManagerService,
    private navHelper: NavHelperService,
    private route: ActivatedRoute
  ) { }

  public ngOnInit() {
    this.loadCase();
  }

  private loadCase() {
    this.caseId = this.route.snapshot.paramMap.get("id");
    this.caseManager.loadExistingCase(this.caseId);
  }

}
