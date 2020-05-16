import {Evidence} from "./Evidence.model";

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
  selectedWitness1: string;
  selectedWitness2: string;
  selectedWitness3: string;
  selectedWitness4: string;
  selectedWitness5: string;
  issue: string;
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
