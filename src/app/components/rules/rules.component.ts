import { Component } from "@angular/core";
import {
  JUDGE_ROLE,
  PLAINTIFF_ROLE,
  DEFENDANT_ROLE,
  WITNESS_ROLE,
  JURY_ROLE
} from 'src/app/constants/rule.constants';

@Component({
  selector: "app-rules",
  templateUrl: "./rules.component.html",
  styleUrls: ["./rules.component.css"]
})
export class RulesComponent {
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
