import { Component, OnInit } from "@angular/core";
import { Issue } from "src/app/models/Issue.model";
import { BooleanHelper } from "src/app/utilities/boolean.util";
import { ActivatedRoute } from "@angular/router";
import { IssueService } from "src/app/services/issue.service";
import { NavHelperService } from "src/app/services/nav-helper.service";

@Component({
  selector: "app-issue-form",
  templateUrl: "./issue-form.component.html",
  styleUrls: ["./issue-form.component.css"]
})
export class IssueFormComponent implements OnInit {
  public issue: Issue = null;
  public showErrors = false;

  public get errors(): string[] {
    const myErrors = [];
    if (this.nameInvalid) {
      myErrors.push("Please provide a name.");
    }
    return myErrors;
  }

  public get valid(): boolean {
    return this.errors.length === 0;
  }

  public get ready(): boolean {
    return BooleanHelper.hasValue(this.issue);
  }

  public get editMode(): boolean {
    return this.ready && BooleanHelper.hasValue(this.issue._id);
  }

  private get nameInvalid(): boolean {
    return !BooleanHelper.hasValue(this.issue.name);
  }

  constructor(
    private route: ActivatedRoute,
    private issueService: IssueService,
    private navHelper: NavHelperService,
  ) { }

  public ngOnInit() {
    this.setupForm();
  }

  public submit() {
    this.showErrors = true;
    if (this.valid) {
      this.save();
    }
  }

  private save() {
    if (this.editMode) {
      this.runEdit();
    } else {
      this.runCreate();
    }
  }

  private runEdit() {
    let response;
    this.issueService.updateIssue(this.issue)
      .subscribe((res) => response = res,
        (error) => {
          console.log("update issue failed");
        }, () => {
          this.navHelper.goToIssueOverview();
        });
  }

  private runCreate() {
    let response;
    this.issueService.createIssue(this.issue)
      .subscribe((res) => response = res,
        (error) => {
          console.log("create issue failed");
        }, () => {
          this.navHelper.goToIssueOverview();
        });
  }

  private setupForm() {
    const urlId = this.route.snapshot.paramMap.get("id");
    if (BooleanHelper.notNull(urlId)) {
      this.setupEditForm(urlId);
    } else {
      this.setupCreateForm();
    }
  }

  private setupEditForm(id: string): void {
    this.issueService.getSingleIssue(id)
      .subscribe((res) => this.issue = res,
        (error) => {
          console.log("get issue failed");
        });
  }

  private setupCreateForm(): void {
    this.issue = {
      name: null,
      description: null,
      _id: null,
    };
  }

}
