import { Component, OnInit } from "@angular/core";
import { Issue } from 'src/app/models/Issue.model';
import { CookieHelper } from 'src/app/utilities/cookie.util';
import { IssueService } from 'src/app/services/issue.service';
import { NavHelperService } from 'src/app/services/nav-helper.service';

@Component({
  selector: "app-issue-table",
  templateUrl: "./issue-table.component.html",
  styleUrls: ["./issue-table.component.css"]
})
export class IssueTableComponent implements OnInit {
  public issues: Issue[] = null;
  public error = false;

  public get canEdit(): boolean {
    return CookieHelper.admin;
  }

  public get ready(): boolean {
    return this.issues !== null;
  }

  constructor(
    private issueService: IssueService,
    private navHelper: NavHelperService,
  ) { }

  public ngOnInit() {
    this.loadIssues();
  }

  public issueDetails(issue: Issue): void {
    this.navHelper.goToIssueDetails(issue._id);
  }

  public createIssue(): void {
    this.navHelper.goToIssueCreateForm();
  }

  public editIssue(issue: Issue): void {
    this.navHelper.goToIssueEditForm(issue._id);
  }

  public requestDelete(issue: Issue): void {
    const confirmDelete = confirm(`Are you sure you want to delete ${issue.name}?`);
    if (confirmDelete) {
      this.deleteIssue(issue);
    }
  }

  private deleteIssue(issue: Issue): void {
    this.issueService.deleteIssue(issue._id)
      .subscribe((res) => this.issues = res,
        (error) => {
          console.log("delete issue failed");
        }, () => {
          this.loadIssues();
        });
  }

  private loadIssues(): void {
    this.issues = null;
    this.error = false;
    this.issueService.getIssue()
      .subscribe((res) => this.issues = res,
        (error) => {
          this.error = true;
          console.log("get issues failed");
        });
  }


}
