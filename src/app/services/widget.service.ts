import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { WidgetResource, Widget } from "../models/Widget.model";
import { RestUrlBuilder } from "../utilities/rest-url-builder.util";
import { ServiceUrl } from "../constants/rest.constants";

@Injectable({
  providedIn: "root"
})
export class WidgetService {
  constructor(
    private http: HttpClient,
  ) { }

  public getWidgets(): Observable<WidgetResource> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller: "widget",
    });
    return this.http.get(url) as Observable<WidgetResource>;
  }

  public getSingleWidget(widgetId: string): Observable<Widget> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller: "widget",
      params: widgetId,
    });
    return this.http.get(url) as Observable<Widget>;
  }

  public createWidget(widget: Widget): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller: "widget",
    });
    return this.http.post(url, widget) as Observable<any>;
  }

  public updateWidget(widget: Widget): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller: "widget",
    });
    return this.http.put(url, widget) as Observable<any>;
  }

  public deleteWidget(widgetId: string): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller: "widget",
      params: widgetId,
    });
    return this.http.delete(url) as Observable<any>;
  }
}
