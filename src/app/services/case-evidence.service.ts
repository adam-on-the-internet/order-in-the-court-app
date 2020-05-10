import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {RestUrlBuilder} from "../utilities/rest-url-builder.util";
import {ServiceUrl} from "../constants/rest.constants";
import {CookieHelper} from "../utilities/cookie.util";
import {Case} from "../models/Case.model";
import {HttpClient} from "@angular/common/http";

const controller = "case";

@Injectable({
  providedIn: 'root'
})
export class CaseEvidenceService {

  constructor(
    private http: HttpClient,
  ) {
  }

  public selectDefendantEvidence(caseId: string, evidenceId: string): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      collection: `selectDefendantEvidence/${caseId}/evidence/${evidenceId}`
    });
    return this.http.put(url, CookieHelper.headers) as Observable<any>;
  }

  public selectPlaintiffEvidence(caseId: string, evidenceId: string): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      collection: `selectPlaintiffEvidence/${caseId}/evidence/${evidenceId}`
    });
    return this.http.put(url, CookieHelper.headers) as Observable<Case>;
  }

  public revealDefendantEvidence(caseId: string, evidenceId: string): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      collection: `revealDefendantEvidence/${caseId}/evidence/${evidenceId}`
    });
    return this.http.put(url, CookieHelper.headers) as Observable<any>;
  }

  public revealPlaintiffEvidence(caseId: string, evidenceId: string): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      collection: `revealPlaintiffEvidence/${caseId}/evidence/${evidenceId}`
    });
    return this.http.put(url, CookieHelper.headers) as Observable<any>;
  }
}
