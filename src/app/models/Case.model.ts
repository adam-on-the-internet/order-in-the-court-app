import { Issue } from "./Issue.model";
import { Witness } from "./Witness.model";
import { Evidence } from "./Evidence.model";

export interface Case {
  _id: string;
  name: string;
  issue: Issue;
  witnesses: Witness[];
  plaintiffEvidence: Evidence[];
  defendantEvidence: Evidence[];
}
