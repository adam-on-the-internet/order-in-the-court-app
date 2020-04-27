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
  poolPlaintiffEvidence: Evidence[];
  unrevealedPlaintiffEvidence: Evidence[];
  revealedPlaintiffEvidence: Evidence[];
  poolDefendantEvidence: Evidence[];
  unrevealedDefendantEvidence: Evidence[];
  revealedDefendantEvidence: Evidence[];
  isDefendantGuilty: boolean;
  status: number;
  closedDate: string;
  openedDate: string;
}
