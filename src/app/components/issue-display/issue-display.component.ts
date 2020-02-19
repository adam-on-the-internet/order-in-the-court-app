import { Component, OnInit } from "@angular/core";
import { Issue } from "src/app/models/Issue.model";
import { BooleanHelper } from "src/app/utilities/boolean.util";
import { ActivatedRoute } from "@angular/router";
import { IssueService } from "src/app/services/issue.service";

@Component({
  selector: "app-issue-display",
  templateUrl: "./issue-display.component.html",
  styleUrls: ["./issue-display.component.css"]
})
export class IssueDisplayComponent implements OnInit {
  public issue: Issue = null;

  public get ready(): boolean {
    return BooleanHelper.notNull(this.issue);
  }

  constructor(
    private issueService: IssueService,
    private route: ActivatedRoute,
  ) { }

  public ngOnInit() {
    this.loadContraption();
  }

  private loadContraption(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.issueService.getSingleIssue(id)
      .subscribe((res) => this.issue = res,
        (error) => {
          console.log("get issue failed");
        });
  }

}
