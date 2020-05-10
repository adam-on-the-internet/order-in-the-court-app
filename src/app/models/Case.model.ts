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
  plaintiffEvidencePool: Evidence[];
  plaintiffEvidenceSelected: Evidence[];
  plaintiffEvidenceCourt: Evidence[];
  defendantEvidencePool: Evidence[];
  defendantEvidenceSelected: Evidence[];
  defendantEvidenceCourt: Evidence[];
  isDefendantGuilty: boolean;
  status: number;
  closedDate: string;
  openedDate: string;
}
