import { Component, OnInit } from "@angular/core";
import { Widget } from "src/app/models/Widget.model";
import { WidgetService } from "src/app/services/widget.service";
import { BooleanHelper } from "src/app/utilities/boolean.util";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-widget-display",
  templateUrl: "./widget-display.component.html",
  styleUrls: ["./widget-display.component.css"]
})
export class WidgetDisplayComponent implements OnInit {
  public widget: Widget = null;

  public get ready(): boolean {
    return BooleanHelper.notNull(this.widget);
  }

  constructor(
    private widgetService: WidgetService,
    private route: ActivatedRoute,
  ) { }

  public ngOnInit() {
    this.loadDoodad();
  }

  private loadDoodad(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.widgetService.getSingleWidget(id)
      .subscribe((res) => this.widget = res,
        (error) => {
          console.log("get widget failed");
        });
  }

}
