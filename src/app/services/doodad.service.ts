import { Injectable } from "@angular/core";
import { DoodadResource, Doodad } from "../models/Doodad.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { RestUrlBuilder } from "../utilities/rest-url-builder.util";
import { ServiceUrl } from "../constants/rest.constants";

@Injectable({
  providedIn: "root"
})
export class DoodadService {
  constructor(
    private http: HttpClient,
  ) { }

  public getDoodads(): Observable<DoodadResource> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller: "doodad",
    });
    return this.http.get(url) as Observable<DoodadResource>;
  }

  public getSingleDoodad(doodadId: string): Observable<Doodad> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller: "doodad",
      params: doodadId,
    });
    return this.http.get(url) as Observable<Doodad>;
  }

  public createDoodad(doodad: Doodad): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller: "doodad",
    });
    return this.http.post(url, doodad) as Observable<any>;
  }

  public updateDoodad(doodad: Doodad): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller: "doodad",
    });
    return this.http.put(url, doodad) as Observable<any>;
  }

  public deleteDoodad(doodadId: string): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller: "doodad",
      params: doodadId,
    });
    return this.http.delete(url) as Observable<any>;
  }
}
