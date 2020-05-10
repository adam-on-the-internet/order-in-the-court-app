import {Case} from "./Case.model";

export interface SortedCases {
  openCases: Case[];
  closedCases: Case[];
  limboCases: Case[];
}
