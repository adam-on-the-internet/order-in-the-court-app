import { Injectable } from "@angular/core";
import { CookieHelper } from "../utilities/cookie.util";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ContraptionResource, Contraption } from "../models/Contraption.model";
import { RestUrlBuilder } from "../utilities/rest-url-builder.util";
import { ServiceUrl } from "../constants/rest.constants";

@Injectable({
  providedIn: "root"
})
export class ContraptionService {
  constructor(
    private http: HttpClient,
  ) { }

  public getContraptions(): Observable<ContraptionResource> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller: "contraption",
    });
    return this.http.get(url) as Observable<ContraptionResource>;
  }

  public getSingleContraption(contraptionId: string): Observable<Contraption> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller: "contraption",
      params: contraptionId,
    });
    return this.http.get(url) as Observable<Contraption>;
  }

  public createContraption(contraption: Contraption): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller: "contraption",
    });
    return this.http.post(url, contraption, CookieHelper.authHeaders) as Observable<any>;
  }

  public updateContraption(contraption: Contraption): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller: "contraption",
    });
    return this.http.put(url, contraption, CookieHelper.authHeaders) as Observable<any>;
  }

  public deleteContraption(contraptionId: string): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller: "contraption",
      params: contraptionId,
    });
    return this.http.delete(url, CookieHelper.authHeaders) as Observable<any>;
  }
}
