import { Component, OnInit } from "@angular/core";
import { WidgetResource, Widget } from "src/app/models/Widget.model";
import { WidgetService } from "src/app/services/widget.service";
import { NavHelperService } from "src/app/services/nav-helper.service";

@Component({
  selector: "app-widget-table",
  templateUrl: "./widget-table.component.html",
  styleUrls: ["./widget-table.component.css"]
})
export class WidgetTableComponent implements OnInit {
  public widgetResource: WidgetResource = null;
  public error = false;

  public get ready(): boolean {
    return this.widgetResource !== null;
  }

  constructor(
    private widgetService: WidgetService,
    private navHelper: NavHelperService,
  ) { }

  public ngOnInit() {
    this.loadWidgets();
  }

  public createWidget(): void {
    this.navHelper.goToWidgetCreateForm();
  }

  public widgetDetails(widget: Widget): void {
    this.navHelper.goToWidgetDetails(widget._id);
  }

  public editWidget(widget: Widget): void {
    this.navHelper.goToWidgetEditForm(widget._id);
  }

  public requestDelete(widget: Widget): void {
    const confirmDelete = confirm(`Are you sure you want to delete ${widget.name}?`);
    if (confirmDelete) {
      this.deleteWidget(widget);
    }
  }

  private deleteWidget(widget: Widget): void {
    this.widgetService.deleteWidget(widget._id)
      .subscribe((res) => this.widgetResource = res,
        (error) => {
          console.log("delete widget failed");
        }, () => {
          this.loadWidgets();
        });
  }

  private loadWidgets(): void {
    this.widgetResource = null;
    this.error = false;
    this.widgetService.getWidgets()
      .subscribe((res) => this.widgetResource = res,
        (error) => {
          this.error = true;
          console.log("get widgets failed");
        });
  }


}
