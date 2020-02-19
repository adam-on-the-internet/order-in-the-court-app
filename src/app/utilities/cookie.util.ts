import { UserDetails } from "../models/UserDetails.model";
import { HttpHeaders } from "@angular/common/http";

export abstract class CookieHelper {

  public static get unauthHeaders() {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json");
    return {
      headers,
    };
  }

  public static get bearerToken(): string {
    return `Bearer ${CookieHelper.getToken()}`;
  }

  public static get authHeaders() {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", CookieHelper.bearerToken);
    return {
      headers,
    };
  }

  public static getToken(): string {
    return localStorage.getItem("auth-token");
  }

  public static removeToken(): void {
    window.localStorage.removeItem("auth-token");
  }

  public static saveToken(token: string): void {
    localStorage.setItem("auth-token", token);
  }

  public static getUserDetails(): UserDetails {
    let payload;
    const token = CookieHelper.getToken();
    if (token) {
      payload = token.split(".")[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  public static get email(): string {
    if (CookieHelper.isLoggedOn) {
      return CookieHelper.getUserDetails().email;
    } else {
      return null;
    }
  }

  public static get admin(): boolean {
    if (CookieHelper.isLoggedOn) {
      return CookieHelper.getUserDetails().admin;
    } else {
      return null;
    }
  }

  public static get specialAccess(): string {
    if (CookieHelper.isLoggedOn) {
      return CookieHelper.getUserDetails().specialAccess;
    } else {
      return null;
    }
  }

  public static get isLoggedOn(): boolean {
    const user = CookieHelper.getUserDetails();
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }
}
