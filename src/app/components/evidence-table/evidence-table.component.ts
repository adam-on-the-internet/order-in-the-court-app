import { Component, OnInit } from "@angular/core";
import { Evidence } from "src/app/models/Evidence.model";
import { CookieHelper } from "src/app/utilities/cookie.util";
import { EvidenceService } from "src/app/services/evidence.service";
import { NavHelperService } from "src/app/services/nav-helper.service";

@Component({
  selector: "app-evidence-table",
  templateUrl: "./evidence-table.component.html",
  styleUrls: ["./evidence-table.component.css"]
})
export class EvidenceTableComponent implements OnInit {
  public evidences: Evidence[] = null;
  public error = false;

  public get canEdit(): boolean {
    return CookieHelper.admin;
  }

  public get ready(): boolean {
    return this.evidences !== null;
  }

  public get hasEvidence(): boolean {
    return this.evidences.length > 0;
  }

  constructor(
    private evidenceService: EvidenceService,
    private navHelper: NavHelperService,
  ) { }

  public ngOnInit() {
    this.loadEvidences();
  }

  public evidenceDetails(evidence: Evidence): void {
    this.navHelper.goToEvidenceDetails(evidence._id);
  }

  public createEvidence(): void {
    this.navHelper.goToEvidenceCreateForm();
  }

  public editEvidence(evidence: Evidence): void {
    this.navHelper.goToEvidenceEditForm(evidence._id);
  }

  public requestDelete(evidence: Evidence): void {
    const confirmDelete = confirm(`Are you sure you want to delete ${evidence.name}?`);
    if (confirmDelete) {
      this.deleteEvidence(evidence);
    }
  }

  private deleteEvidence(evidence: Evidence): void {
    this.evidenceService.deleteEvidence(evidence._id)
      .subscribe((res) => this.evidences = res,
        (error) => {
          console.log("delete evidence failed");
        }, () => {
          this.loadEvidences();
        });
  }

  private loadEvidences(): void {
    this.evidences = null;
    this.error = false;
    this.evidenceService.getEvidence()
      .subscribe((res) => this.evidences = res,
        (error) => {
          this.error = true;
          console.log("get evidences failed");
        });
  }

}
