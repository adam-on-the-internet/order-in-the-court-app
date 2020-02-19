import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Case } from "../models/Case.model";

@Injectable({
  providedIn: "root"
})
export class CaseService {

  constructor() { }

  public getRandomCase(): Observable<Case> {
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
    return of(myCase);
  }
}
