import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { RestUrlBuilder } from "../utilities/rest-url-builder.util";
import { ServiceUrl } from "../constants/rest.constants";
import { CookieHelper } from "../utilities/cookie.util";
import { Evidence } from "../models/Evidence.model";

const controller = "evidence";

@Injectable({
  providedIn: "root"
})
export class EvidenceService {
  constructor(
    private http: HttpClient,
  ) { }

  public getEvidence(): Observable<Evidence[]> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller
    });
    return this.http.get(url) as Observable<Evidence[]>;
  }

  public getSingleEvidence(evienceId: string): Observable<Evidence> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      params: evienceId,
    });
    return this.http.get(url) as Observable<Evidence>;
  }

  public createEvidence(evidence: any): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller
    });
    return this.http.post(url, evidence, CookieHelper.authHeaders) as Observable<any>;
  }

  public updateEvidence(evidence: any): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller
    });
    return this.http.put(url, evidence, CookieHelper.authHeaders) as Observable<any>;
  }

  public deleteEvidence(evienceId: string): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      params: evienceId,
    });
    return this.http.delete(url, CookieHelper.authHeaders) as Observable<any>;
  }
}
