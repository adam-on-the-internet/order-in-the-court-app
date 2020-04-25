import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { RestUrlBuilder } from "../utilities/rest-url-builder.util";
import { ServiceUrl } from "../constants/rest.constants";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(
    private http: HttpClient,
  ) { }

  public register(email: string): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller: "user",
      collection: "register"
    });
    const user = {
      email
    };
    return this.http.post(url, user);
  }

  public resetPasswordAutomatic(email: string): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller: "user",
      collection: "passwordReset/automatic"
    });
    const user = {
      email
    };
    return this.http.put(url, user);
  }
}
