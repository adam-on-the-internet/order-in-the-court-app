import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BooleanHelper } from "src/app/utilities/boolean.util";
import { Widget } from "src/app/models/Widget.model";
import { WidgetService } from "src/app/services/widget.service";
import { NavHelperService } from "src/app/services/nav-helper.service";

@Component({
  selector: "app-widget-form",
  templateUrl: "./widget-form.component.html",
  styleUrls: ["./widget-form.component.css"]
})
export class WidgetFormComponent implements OnInit {
  public widget: Widget = null;
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
    return BooleanHelper.hasValue(this.widget);
  }

  public get editMode(): boolean {
    return this.ready && BooleanHelper.hasValue(this.widget._id);
  }

  private get nameInvalid(): boolean {
    return !BooleanHelper.hasValue(this.widget.name);
  }

  private get typeInvalid(): boolean {
    return !BooleanHelper.hasValue(this.widget.type);
  }

  private get ageInvalid(): boolean {
    return !BooleanHelper.hasValue(this.widget.age);
  }

  private get descriptionInvalid(): boolean {
    return !BooleanHelper.hasValue(this.widget.description);
  }

  constructor(
    private route: ActivatedRoute,
    private widgetService: WidgetService,
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
    this.widgetService.updateWidget(this.widget)
      .subscribe((res) => response = res,
        (error) => {
          console.log("update widget failed");
        }, () => {
          this.navHelper.goToWidgetOverview();
        });
  }

  private runCreate() {
    let response;
    this.widgetService.createWidget(this.widget)
      .subscribe((res) => response = res,
        (error) => {
          console.log("create widget failed");
        }, () => {
          this.navHelper.goToWidgetOverview();
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
    this.widgetService.getSingleWidget(id)
      .subscribe((res) => this.widget = res,
        (error) => {
          console.log("get widget failed");
        });
  }

  private setupCreateForm(): void {
    this.widget = {
      name: null,
      _id: null,
      type: null,
      description: null,
      age: null,
      used: false,
    };
  }

}
