import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RestUrlBuilder } from "../utilities/rest-url-builder.util";
import { ServiceUrl } from "../constants/rest.constants";
import { Observable } from "rxjs";
import { TokenResponse } from "../models/Token.model";
import { CookieHelper } from "../utilities/cookie.util";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(
    private http: HttpClient,
  ) { }

  public login(email: string, password: string): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller: "auth",
      collection: "login"
    });
    const user = {
      email,
      password
    };
    return this.http.post(url, user)
      .pipe(
        map((res) => {
          const tokenResponse = res as TokenResponse;
          CookieHelper.saveToken(tokenResponse.token);
          return CookieHelper.isLoggedOn;
        })
      );
  }
}
