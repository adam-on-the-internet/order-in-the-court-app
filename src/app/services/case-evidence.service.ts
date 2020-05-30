import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {RestUrlBuilder} from "../utilities/rest-url-builder.util";
import {ServiceUrl} from "../constants/rest.constants";
import {CookieHelper} from "../utilities/cookie.util";
import {Case} from "../models/Case.model";
import {HttpClient} from "@angular/common/http";

const controller = "case";

@Injectable({
  providedIn: "root"
})
export class CaseEvidenceService {

  constructor(
    private http: HttpClient,
  ) {
  }

  public pickStartingDefendantEvidence(caseId: string, evidenceId: string): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      collection: `${caseId}/pickStartingEvidence/defendant/${evidenceId}`
    });
    return this.http.put(url, CookieHelper.headers) as Observable<any>;
  }

  public pickStartingPlaintiffEvidence(caseId: string, evidenceId: string): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      collection: `${caseId}/pickStartingEvidence/plaintiff/${evidenceId}`
    });
    return this.http.put(url, CookieHelper.headers) as Observable<Case>;
  }

  public revealDefendantEvidence(caseId: string, evidenceId: string): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      collection: `${caseId}/revealEvidence/defendant/${evidenceId}`
    });
    return this.http.put(url, CookieHelper.headers) as Observable<any>;
  }

  public revealPlaintiffEvidence(caseId: string, evidenceId: string): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      collection: `${caseId}/revealEvidence/plaintiff/${evidenceId}`
    });
    return this.http.put(url, CookieHelper.headers) as Observable<any>;
  }

  public selectWitness(caseId: string, witnessNumber: number, witnessId: string): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      collection: `${caseId}/selectWitness/${witnessNumber}/${witnessId}`
    });
    return this.http.put(url, null, CookieHelper.headers) as Observable<any>;
  }
}
