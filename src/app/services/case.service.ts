import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Case } from "../models/Case.model";
import { CaseOrder } from "../models/CaseOrder.model";
import { HttpClient } from "@angular/common/http";
import { RestUrlBuilder } from "../utilities/rest-url-builder.util";
import { ServiceUrl } from "../constants/rest.constants";
import { CookieHelper } from "../utilities/cookie.util";

const myCase: Case = {
  issue: {
    _id: null,
    name: "Name",
    description: "Description"
  },
  witnesses: [
    {
      name: "witness 1",
      _id: null,
    },
    {
      name: "witness 2",
      _id: null,
    },
  ],
  defendantEvidence: [
    {
      name: "D evidence 1",
      _id: null,
    },
    {
      name: "D evidence 2",
      _id: null,
    }
  ],
  plantiffEvidence: [
    {
      name: "P evidence 1",
      _id: null,
    },
    {
      name: "P evidence 2",
      _id: null,
    }
  ],
};

const controller = "case";

@Injectable({
  providedIn: "root"
})
export class CaseService {

  constructor(
    private http: HttpClient,
  ) { }

  public getAllCases(): Observable<Case[]> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller
    });
    return this.http.get(url, CookieHelper.unauthHeaders) as Observable<Case[]>;

  }

  public makeACase(caseOrder: CaseOrder): Observable<Case> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller
    });
    return this.http.post(url, caseOrder, CookieHelper.unauthHeaders) as Observable<Case>;
  }

  public getRandomCase(): Observable<Case> {
    return of(myCase);
  }
}
