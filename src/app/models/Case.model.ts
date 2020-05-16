import {Evidence} from "./Evidence.model";
import {Witness} from "./Witness.model";

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
  selectedWitness1: Witness;
  selectedWitness2: Witness;
  selectedWitness3: Witness;
  selectedWitness4: Witness;
  selectedWitness5: Witness;
  witnessPool1: Witness[];
  witnessPool2: Witness[];
  witnessPool3: Witness[];
  witnessPool4: Witness[];
  witnessPool5: Witness[];
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
