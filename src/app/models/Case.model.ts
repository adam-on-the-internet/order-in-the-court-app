import { Issue } from "./Issue.model";
import { Witness } from "./Witness.model";
import { Evidence } from "./Evidence.model";

export interface Case {
  _id: string;
  name: string;
  issue: Issue;
  unrevealedWitnesses: Witness[];
  revealedWitnesses: Witness[];
  unrevealedPlaintiffEvidence: Evidence[];
  revealedPlaintiffEvidence: Evidence[];
  unreavledDefendantEvidence: Evidence[];
  revealedDefendantEvidence: Evidence[];
  plaintiffScore: number;
  defendantScore: number;
  notes: string;
  verdict: string;
  closed: boolean;
}

export interface SortedCases {
  openCases: Case[];
  closedCases: Case[];
}
