import { Issue } from "./Issue.model";
import { Witness } from "./Witness.model";
import { Evidence } from "./Evidence.model";

export interface Case {
  _id: string;
  name: string;
  judgeName: string;
  plaintiffName: string;
  defendantName: string;
  witnessName1: string;
  witnessName2: string;
  witnessName3: string;
  witnessName4: string;
  witnessName5: string;
  issue: string;
  witnesses: string[];
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
