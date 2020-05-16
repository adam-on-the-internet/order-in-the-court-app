import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Case} from "../models/Case.model";
import {RestUrlBuilder} from "../utilities/rest-url-builder.util";
import {ServiceUrl} from "../constants/rest.constants";
import {CookieHelper} from "../utilities/cookie.util";

const controller = "case";

@Injectable({
  providedIn: "root"
})
export class CaseStatusService {

  constructor(
    private http: HttpClient,
  ) { }

  public create(): Observable<Case> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller
    });
    return this.http.post(url, null, CookieHelper.headers) as Observable<Case>;
  }

  public lockRoles(caseId: string): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      collection: `${caseId}/lockRoles`
    });
    return this.http.put(url, null, CookieHelper.headers) as Observable<any>;
  }

  public startFreeTime(caseId: string): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      collection: `${caseId}/startFreeTime`
    });
    return this.http.put(url, null, CookieHelper.headers) as Observable<any>;
  }

  public startOpeningArguments(caseId: string): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      collection: `${caseId}/startOpeningArguments`
    });
    return this.http.put(url, null, CookieHelper.headers) as Observable<any>;
  }

  public startCrossfire(caseId: string): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      collection: `${caseId}/startCrossfire`
    });
    return this.http.put(url, null, CookieHelper.headers) as Observable<any>;
  }

  public startClosingArguments(caseId: string): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      collection: `${caseId}/startClosingArguments`
    });
    return this.http.put(url, null, CookieHelper.headers) as Observable<any>;
  }

  public startVerdictSelection(caseId: string): Observable<Case> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      collection: `${caseId}/startVerdictSelection`
    });
    return this.http.put(url, null, CookieHelper.headers) as Observable<any>;
  }

  public makeVerdict(caseId: string, isDefendantGuilty: boolean): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      collection: `${caseId}/makeVerdict/${isDefendantGuilty}`
    });
    return this.http.put(url, null, CookieHelper.headers) as Observable<any>;
  }

}
