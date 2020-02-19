import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BooleanHelper } from "src/app/utilities/boolean.util";
import { Doodad } from "src/app/models/Doodad.model";
import { DoodadService } from "src/app/services/doodad.service";
import { NavHelperService } from "src/app/services/nav-helper.service";

@Component({
  selector: "app-doodad-form",
  templateUrl: "./doodad-form.component.html",
  styleUrls: ["./doodad-form.component.css"]
})
export class DoodadFormComponent implements OnInit {
  public doodad: Doodad = null;
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
    return BooleanHelper.hasValue(this.doodad);
  }

  public get editMode(): boolean {
    return this.ready && BooleanHelper.hasValue(this.doodad._id);
  }

  private get nameInvalid(): boolean {
    return !BooleanHelper.hasValue(this.doodad.name);
  }

  private get typeInvalid(): boolean {
    return !BooleanHelper.hasValue(this.doodad.type);
  }

  private get ageInvalid(): boolean {
    return !BooleanHelper.hasValue(this.doodad.age);
  }

  private get descriptionInvalid(): boolean {
    return !BooleanHelper.hasValue(this.doodad.description);
  }

  constructor(
    private route: ActivatedRoute,
    private doodadService: DoodadService,
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
    this.doodadService.updateDoodad(this.doodad)
      .subscribe((res) => response = res,
        (error) => {
          console.log("update doodad failed");
        }, () => {
          this.navHelper.goToDoodadOverview();
        });
  }

  private runCreate() {
    let response;
    this.doodadService.createDoodad(this.doodad)
      .subscribe((res) => response = res,
        (error) => {
          console.log("create doodad failed");
        }, () => {
          this.navHelper.goToDoodadOverview();
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
    this.doodadService.getSingleDoodad(id)
      .subscribe((res) => this.doodad = res,
        (error) => {
          console.log("get doodad failed");
        });
  }

  private setupCreateForm(): void {
    this.doodad = {
      name: null,
      _id: null,
      type: null,
      description: null,
      age: null,
      used: false,
    };
  }
}
