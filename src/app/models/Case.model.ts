import { Issue } from "./Issue.model";
import { Witness } from "./Witness.model";
import { Evidence } from "./Evidence.model";

export interface Case {
  issue: Issue;
  witnesses: Witness[];
  plantiffEvidence: Evidence[];
  defendantEvidence: Evidence[];
}
