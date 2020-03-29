import { Component, OnInit } from "@angular/core";
import { Witness } from "src/app/models/Witness.model";
import { BooleanHelper } from "src/app/utilities/boolean.util";
import { ActivatedRoute } from "@angular/router";
import { WitnessService } from "src/app/services/witness.service";
import { NavHelperService } from "src/app/services/nav-helper.service";

@Component({
  selector: "app-witness-form",
  templateUrl: "./witness-form.component.html",
  styleUrls: ["./witness-form.component.css"]
})
export class WitnessFormComponent implements OnInit {
  public witness: Witness = null;
  public showErrors = false;

  public get title(): string {
    if (this.editMode) {
      return "Edit Witness";
    }
    return "Create Witness";
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
    return BooleanHelper.hasValue(this.witness);
  }

  public get editMode(): boolean {
    return this.ready && BooleanHelper.hasValue(this.witness._id);
  }

  private get nameInvalid(): boolean {
    return !BooleanHelper.hasValue(this.witness.name);
  }

  constructor(
    private route: ActivatedRoute,
    private witnessService: WitnessService,
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
    this.witnessService.updateWitness(this.witness)
      .subscribe((res) => response = res,
        (error) => {
          console.log("update witness failed");
        }, () => {
          this.navHelper.goToWitnessOverview();
        });
  }

  private runCreate() {
    let response;
    this.witnessService.createWitness(this.witness)
      .subscribe((res) => response = res,
        (error) => {
          console.log("create witness failed");
        }, () => {
          this.navHelper.goToWitnessOverview();
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
    this.witnessService.getSingleWitness(id)
      .subscribe((res) => this.witness = res,
        (error) => {
          console.log("get witness failed");
        });
  }

  private setupCreateForm(): void {
    this.witness = {
      name: null,
      _id: null,
    };
  }


}
