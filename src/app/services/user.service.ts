import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { RestUrlBuilder } from "../utilities/rest-url-builder.util";
import { ServiceUrl } from "../constants/rest.constants";
import { CookieHelper } from "../utilities/cookie.util";
import { User } from "../models/User.model";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(
    private http: HttpClient,
  ) { }

  public getAllUsers(): Observable<User[]> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller: "user"
    });
    return this.http.get(url, CookieHelper.authHeaders) as Observable<User[]>;
  }

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

  public updateEmailSelf(email: string): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller: "user",
      collection: "emailUpdate/self"
    });
    const user = {
      newEmail: email
    };
    return this.http.put(url, user, CookieHelper.authHeaders);
  }

  public editAccess(email: string, specialAccess: string): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller: "user",
      collection: "specialAccess"
    });
    const body = {
      email,
      specialAccess
    };
    return this.http.put(url, body, CookieHelper.authHeaders);
  }

  public setAdmin(email: string, isAdmin: boolean): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller: "user",
      collection: "setAdmin"
    });
    const body = {
      email,
      isAdmin
    };
    return this.http.put(url, body, CookieHelper.authHeaders);
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

  public resetPasswordManual(password: string, confirmPassword: string): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller: "user",
      collection: "passwordReset/manual"
    });
    const body = {
      password,
      confirmPassword
    };
    return this.http.put(url, body, CookieHelper.authHeaders);
  }

  public deleteUser(id: string): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller: "user",
      collection: id
    });
    return this.http.delete(url, CookieHelper.authHeaders);
  }
}
