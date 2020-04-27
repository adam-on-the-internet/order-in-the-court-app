import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
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

  public getOpenCases(): Observable<Case[]> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      collection: "open",
    });
    return this.http.get(url, CookieHelper.unauthHeaders) as Observable<Case[]>;
  }

  public getClosedCases(): Observable<Case[]> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      collection: "closed",
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

  public create(): Observable<Case> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller
    });
    return this.http.post(url, null, CookieHelper.unauthHeaders) as Observable<Case>;
  }

  public assignJudgeName(caseId: string, judgeName: string): Observable<Case> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      collection: "judgeName"
    });
    const params = {
      judgeName,
      caseId
    };
    return this.http.put(url, params, CookieHelper.unauthHeaders) as Observable<Case>;
  }

  public assignPlaintiffName(caseId: string, plaintiffName: string): Observable<Case> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      collection: "plaintiffName"
    });
    const params = {
      plaintiffName,
      caseId
    };
    return this.http.put(url, params, CookieHelper.unauthHeaders) as Observable<Case>;
  }

  public assignDefendantName(caseId: string, defendantName: string): Observable<Case> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      collection: "defendantName"
    });
    const params = {
      defendantName,
      caseId
    };
    return this.http.put(url, params, CookieHelper.unauthHeaders) as Observable<Case>;
  }

  public assignWitnessName(caseId: string, witnessName: string): Observable<Case> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      collection: "witnessName"
    });
    const params = {
      witnessName,
      caseId
    };
    return this.http.put(url, params, CookieHelper.unauthHeaders) as Observable<Case>;
  }

  public startCase(caseId: string): Observable<Case> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      collection: "start"
    });
    const params = {
      caseId
    };
    return this.http.put(url, params, CookieHelper.unauthHeaders) as Observable<Case>;
  }

  public closeCase(caseId: string, isDefendantGuilty: boolean): Observable<Case> {
    const body = {
      caseId,
      isDefendantGuilty
    };
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      collection: `close`
    });
    return this.http.put(url, body, CookieHelper.unauthHeaders) as Observable<Case>;
  }

  public selectDefendantEvidence(caseId: string, evidenceId: string): Observable<Case> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      collection: `revealDefendantEvidence/case/${caseId}/evidence/${evidenceId}`
    });
    return this.http.put(url, CookieHelper.unauthHeaders) as Observable<Case>;
  }

  public selectPlaintiffEvidence(caseId: string, evidenceId: string): Observable<Case> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      collection: `selectPlaintiffEvidence/case/${caseId}/evidence/${evidenceId}`
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
