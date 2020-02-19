import { Component, OnInit } from "@angular/core";
import { Contraption } from "src/app/models/Contraption.model";
import { BooleanHelper } from "src/app/utilities/boolean.util";
import { ContraptionService } from "src/app/services/contraption.service";
import { NavHelperService } from "src/app/services/nav-helper.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-contraption-form",
  templateUrl: "./contraption-form.component.html",
  styleUrls: ["./contraption-form.component.css"]
})
export class ContraptionFormComponent implements OnInit {
  public contraption: Contraption = null;
  public showErrors = false;

  public get errors(): string[] {
    const myErrors = [];
    if (this.nameInvalid) {
      myErrors.push("Please provide a name.");
    }
    if (this.typeInvalid) {
      myErrors.push("Please provide a type.");
    }
    if (this.ageInvalid) {
      myErrors.push("Please provide an age.");
    }
    if (this.descriptionInvalid) {
      myErrors.push("Please provide a desciption.");
    }
    return myErrors;
  }

  public get valid(): boolean {
    return this.errors.length === 0;
  }

  public get ready(): boolean {
    return BooleanHelper.hasValue(this.contraption);
  }

  public get editMode(): boolean {
    return this.ready && BooleanHelper.hasValue(this.contraption._id);
  }

  private get nameInvalid(): boolean {
    return !BooleanHelper.hasValue(this.contraption.name);
  }

  private get typeInvalid(): boolean {
    return !BooleanHelper.hasValue(this.contraption.type);
  }

  private get ageInvalid(): boolean {
    return !BooleanHelper.hasValue(this.contraption.age);
  }

  private get descriptionInvalid(): boolean {
    return !BooleanHelper.hasValue(this.contraption.description);
  }

  constructor(
    private route: ActivatedRoute,
    private contraptionService: ContraptionService,
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
    this.contraptionService.updateContraption(this.contraption)
      .subscribe((res) => response = res,
        (error) => {
          console.log("update contraption failed");
        }, () => {
          this.navHelper.goToContraptionOverview();
        });
  }

  private runCreate() {
    let response;
    this.contraptionService.createContraption(this.contraption)
      .subscribe((res) => response = res,
        (error) => {
          console.log("create contraption failed");
        }, () => {
          this.navHelper.goToContraptionOverview();
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
    this.contraptionService.getSingleContraption(id)
      .subscribe((res) => this.contraption = res,
        (error) => {
          console.log("get contraption failed");
        });
  }

  private setupCreateForm(): void {
    this.contraption = {
      name: null,
      _id: null,
      type: null,
      description: null,
      age: null,
      used: false,
    };
  }

}
