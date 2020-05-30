import {Component, Input} from "@angular/core";
import {Evidence} from "../../models/Evidence.model";

@Component({
  selector: "app-revealed-evidence-list",
  templateUrl: "./revealed-evidence-list.component.html",
  styleUrls: ["./revealed-evidence-list.component.scss"]
})
export class RevealedEvidenceListComponent {
  @Input() public revealedEvidence: Evidence[] = [];
  @Input() public listName = "Revealed Evidence";
  @Input() public icon: string = null;

  public get missingEvidenceCount(): number[] {
    const missingCount = 5 - this.revealedEvidence.length;
    // @ts-ignore
    return Array(missingCount).fill().map((x, i) => i);
  }
}
