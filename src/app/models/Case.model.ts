import { Issue } from "./Issue.model";
import { Witness } from "./Witness.model";
import { Evidence } from "./Evidence.model";

export interface Case {
  _id: string;
  name: string;
  judgeName: string;
  plaintiffName: string;
  defendantName: string;
  witnessNames: string[];
  issue: Issue;
  witnesses: Witness[];
  unrevealedPlaintiffEvidence: Evidence[];
  revealedPlaintiffEvidence: Evidence[];
  unrevealedDefendantEvidence: Evidence[];
  revealedDefendantEvidence: Evidence[];
  plaintiffScore: number;
  defendantScore: number;
  notes: string;
  isDefendantGuilty: boolean;
  status: number;
  closedDate: string;
  openedDate: string;
}
