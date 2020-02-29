import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Case } from "../models/Case.model";
import { CaseOrder } from "../models/CaseOrder.model";
import { HttpClient } from "@angular/common/http";
import { RestUrlBuilder } from "../utilities/rest-url-builder.util";
import { ServiceUrl } from "../constants/rest.constants";
import { CookieHelper } from "../utilities/cookie.util";

const controller = "case";

@Injectable({
  providedIn: "root"
})
export class CaseService {

  constructor(
    private http: HttpClient,
  ) { }

  public getAllCases(): Observable<Case[]> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller
    });
    return this.http.get(url, CookieHelper.unauthHeaders) as Observable<Case[]>;
  }

  public getAllCaseNames(): Observable<string[]> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      collection: "names"
    });
    return this.http.get(url, CookieHelper.unauthHeaders) as Observable<string[]>;
  }

  public getSingleCase(id: string): Observable<Case> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      collection: id,
    });
    return this.http.get(url, CookieHelper.authHeaders) as Observable<Case>;
  }

  public makeACase(caseOrder: CaseOrder): Observable<Case> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller
    });
    return this.http.post(url, caseOrder, CookieHelper.unauthHeaders) as Observable<Case>;
  }

  public updateJudgeCaseNotes(myCase: Case): Observable<Case> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      collection: "judge"
    });
    return this.http.put(url, myCase, CookieHelper.unauthHeaders) as Observable<Case>;
  }

  public revealWitness(caseId: string, witnessId: string): Observable<Case> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      collection: `revealWitness/case/${caseId}/witness/${witnessId}`
    });
    return this.http.put(url, CookieHelper.unauthHeaders) as Observable<Case>;
  }

  public revealDefendantEvidence(caseId: string, evidenceId: string): Observable<Case> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      collection: `revealDefendantEvidence/case/${caseId}/evidence/${evidenceId}`
    });
    return this.http.put(url, CookieHelper.unauthHeaders) as Observable<Case>;
  }

  public revealPlaintiffEvidence(caseId: string, evidenceId: string): Observable<Case> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      collection: `revealPlaintiffEvidence/case/${caseId}/evidence/${evidenceId}`
    });
    return this.http.put(url, CookieHelper.unauthHeaders) as Observable<Case>;
  }

  public deleteCase(caseId: string): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      params: caseId,
    });
    return this.http.delete(url, CookieHelper.authHeaders) as Observable<any>;
  }
}
