import { Component, Input } from "@angular/core";
import { Issue } from "src/app/models/Issue.model";

@Component({
  selector: "app-issue-block",
  templateUrl: "./issue-block.component.html",
  styleUrls: ["./issue-block.component.css"]
})
export class IssueBlockComponent {
  @Input() public issue: Issue = null;
}
