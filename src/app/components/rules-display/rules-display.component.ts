import { Component } from "@angular/core";
import {DEFENDANT_ROLE, JUDGE_ROLE, JURY_ROLE, PLAINTIFF_ROLE, WITNESS_ROLE} from "../../constants/rule.constants";

@Component({
  selector: "app-rules-display",
  templateUrl: "./rules-display.component.html",
  styleUrls: ["./rules-display.component.scss"]
})
export class RulesDisplayComponent {
  public get judgeRole(): string {
    return JUDGE_ROLE;
  }

  public get plaintiffRole(): string {
    return PLAINTIFF_ROLE;
  }

  public get defendantRole(): string {
    return DEFENDANT_ROLE;
  }

  public get witnessRole(): string {
    return WITNESS_ROLE;
  }

  public get juryRole(): string {
    return JURY_ROLE;
  }
}
