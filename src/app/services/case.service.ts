import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Case} from "../models/Case.model";
import {HttpClient} from "@angular/common/http";
import {RestUrlBuilder} from "../utilities/rest-url-builder.util";
import {ServiceUrl} from "../constants/rest.constants";
import {CookieHelper} from "../utilities/cookie.util";
import {SortedCases} from "../models/SortedCases.model";

const controller = "case";

@Injectable({
  providedIn: "root"
})
export class CaseService {

  constructor(
    private http: HttpClient,
  ) {
  }

  public getOpenCases(): Observable<Case[]> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      collection: "open",
    });
    return this.http.get(url, CookieHelper.headers) as Observable<Case[]>;
  }

  public getClosedCases(): Observable<Case[]> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      collection: "closed",
    });
    return this.http.get(url, CookieHelper.headers) as Observable<Case[]>;
  }

  public getAllCases(): Observable<SortedCases> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
    });
    return this.http.get(url, CookieHelper.headers) as Observable<SortedCases>;
  }

  public getSingleCase(id: string): Observable<Case> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      collection: id,
    });
    return this.http.get(url, CookieHelper.headers) as Observable<Case>;
  }

  public deleteCase(caseId: string): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      params: caseId,
    });
    return this.http.delete(url, CookieHelper.headers) as Observable<any>;
  }
}
