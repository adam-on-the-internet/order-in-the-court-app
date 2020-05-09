import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Case} from "../models/Case.model";
import {RestUrlBuilder} from "../utilities/rest-url-builder.util";
import {ServiceUrl} from "../constants/rest.constants";
import {CookieHelper} from "../utilities/cookie.util";

const controller = "case";

@Injectable({
  providedIn: 'root'
})
export class CaseNameService {

  constructor(
    private http: HttpClient,
  ) { }

  public assignJudgeName(caseId: string, judgeName: string): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      collection: `judgeName/${caseId}`
    });
    const params = {
      judgeName
    };
    return this.http.put(url, params, CookieHelper.headers) as Observable<any>;
  }

  public removeJudgeName(caseId: string): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      collection: `removeJudgeName/${caseId}`
    });
    return this.http.put(url, null, CookieHelper.headers) as Observable<any>;
  }

  public assignPlaintiffName(caseId: string, plaintiffName: string): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      collection: `plaintiffName/${caseId}`
    });
    const params = {
      plaintiffName
    };
    return this.http.put(url, params, CookieHelper.headers) as Observable<any>;
  }

  public removePlaintiffName(caseId: string): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      collection: `removePlaintiffName/${caseId}`
    });
    return this.http.put(url, null, CookieHelper.headers) as Observable<any>;
  }

  public assignDefendantName(caseId: string, defendantName: string): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      collection: `defendantName/${caseId}`
    });
    const params = {
      defendantName
    };
    return this.http.put(url, params, CookieHelper.headers) as Observable<any>;
  }

  public removeDefendantName(caseId: string): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      collection: `removeDefendantName/${caseId}`
    });
    return this.http.put(url, null, CookieHelper.headers) as Observable<any>;
  }

  public assignWitnessName(caseId: string, witnessName: string): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      collection: `witnessName/${caseId}`
    });
    const params = {
      witnessName,
    };
    return this.http.put(url, params, CookieHelper.headers) as Observable<any>;
  }

  public removeWitnessName(caseId: string, witnessName: string): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      collection: `removeWitnessName/${caseId}`
    });
    const params = {
      witnessName,
    };
    return this.http.put(url, params, CookieHelper.headers) as Observable<any>;
  }
}
