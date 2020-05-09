import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Log } from "../models/Log.model";
import { RestUrlBuilder } from "../utilities/rest-url-builder.util";
import { ServiceUrl } from "../constants/rest.constants";
import { CookieHelper } from "../utilities/cookie.util";

@Injectable({
  providedIn: "root"
})
export class LogService {

  constructor(
    private http: HttpClient,
  ) { }

  public log(level: string, message: string): Observable<any> {
    const log: Log = {
      level,
      message,
      application: "order-in-the-court-ui"
    };
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller: "log"
    });
    return this.http.post(url, log, CookieHelper.headers) as Observable<any>;
  }
}
