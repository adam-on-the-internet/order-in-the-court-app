import { Component, OnInit } from "@angular/core";
import { Evidence } from "src/app/models/Evidence.model";
import { BooleanHelper } from "src/app/utilities/boolean.util";
import { ActivatedRoute } from "@angular/router";
import { EvidenceService } from "src/app/services/evidence.service";
import { NavHelperService } from "src/app/services/nav-helper.service";

@Component({
  selector: "app-evidence-form",
  templateUrl: "./evidence-form.component.html",
  styleUrls: ["./evidence-form.component.css"]
})
export class EvidenceFormComponent implements OnInit {
  public evidence: Evidence = null;
  public showErrors = false;

  public get title(): string {
    if (this.editMode) {
      return "Edit Evidence";
    }
    return "Create Evidence";
  }

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
    return BooleanHelper.hasValue(this.evidence);
  }

  public get editMode(): boolean {
    return this.ready && BooleanHelper.hasValue(this.evidence._id);
  }

  private get nameInvalid(): boolean {
    return !BooleanHelper.hasValue(this.evidence.name);
  }

  constructor(
    private route: ActivatedRoute,
    private evidenceService: EvidenceService,
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
    this.evidenceService.updateEvidence(this.evidence)
      .subscribe((res) => response = res,
        (error) => {
          console.log("update evidence failed");
        }, () => {
          this.navHelper.goToEvidenceOverview();
        });
  }

  private runCreate() {
    let response;
    this.evidenceService.createEvidence(this.evidence)
      .subscribe((res) => response = res,
        (error) => {
          console.log("create evidence failed");
        }, () => {
          this.navHelper.goToEvidenceOverview();
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
    this.evidenceService.getSingleEvidence(id)
      .subscribe((res) => this.evidence = res,
        (error) => {
          console.log("get evidence failed");
        });
  }

  private setupCreateForm(): void {
    this.evidence = {
      name: null,
      _id: null,
    };
  }

}
