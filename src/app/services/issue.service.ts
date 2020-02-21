import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Issue } from "../models/Issue.model";
import { RestUrlBuilder } from "../utilities/rest-url-builder.util";
import { ServiceUrl } from "../constants/rest.constants";
import { CookieHelper } from "../utilities/cookie.util";

const controller = "issue";

@Injectable({
  providedIn: "root"
})
export class IssueService {
  constructor(
    private http: HttpClient,
  ) { }

  public getIssue(): Observable<Issue[]> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller
    });
    return this.http.get(url, CookieHelper.authHeaders) as Observable<Issue[]>;
  }

  public getSingleIssue(issueId: string): Observable<Issue> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      params: issueId,
    });
    return this.http.get(url, CookieHelper.authHeaders) as Observable<Issue>;
  }

  public createIssue(issue: any): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller
    });
    return this.http.post(url, issue, CookieHelper.authHeaders) as Observable<any>;
  }

  public updateIssue(issue: any): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller
    });
    return this.http.put(url, issue, CookieHelper.authHeaders) as Observable<any>;
  }

  public deleteIssue(issueId: string): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      params: issueId,
    });
    return this.http.delete(url, CookieHelper.authHeaders) as Observable<any>;
  }
}
