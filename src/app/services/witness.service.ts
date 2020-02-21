import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RestUrlBuilder } from "../utilities/rest-url-builder.util";
import { Observable } from "rxjs";
import { ServiceUrl } from "../constants/rest.constants";
import { Witness } from "../models/Witness.model";
import { CookieHelper } from "../utilities/cookie.util";

const controller = "witness";

@Injectable({
  providedIn: "root"
})
export class WitnessService {
  constructor(
    private http: HttpClient,
  ) { }

  public getWitness(): Observable<Witness[]> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller
    });
    return this.http.get(url, CookieHelper.authHeaders) as Observable<Witness[]>;
  }

  public getSingleWitness(witnessId: string): Observable<Witness> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      params: witnessId,
    });
    return this.http.get(url, CookieHelper.authHeaders) as Observable<Witness>;
  }

  public createWitness(witness: any): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller
    });
    return this.http.post(url, witness, CookieHelper.authHeaders) as Observable<any>;
  }

  public updateWitness(witness: any): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller
    });
    return this.http.put(url, witness, CookieHelper.authHeaders) as Observable<any>;
  }

  public deleteWitness(witnessId: string): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller,
      params: witnessId,
    });
    return this.http.delete(url, CookieHelper.authHeaders) as Observable<any>;
  }
}
