import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { RestUrlBuilder } from "../utilities/rest-url-builder.util";

@Injectable({
  providedIn: "root"
})
export class ActuatorService {

  constructor(
    private http: HttpClient,
  ) { }

  public checkHealth(serviceUrl: string): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: serviceUrl,
      controller: "actuator",
      collection: "health"
    });
    return this.http.get(url) as Observable<any>;
  }
}
