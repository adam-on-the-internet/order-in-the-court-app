import {Injectable} from '@angular/core';
import {Roles} from "../constants/role.constants";
import {BooleanHelper} from "../utilities/boolean.util";

@Injectable({
  providedIn: 'root'
})
export class IdentityService {
  public playerName: string = null;
  public role: Roles = Roles.UNSELECTED;

  public get hasPlayerName(): boolean {
    return BooleanHelper.hasValue(this.playerName);
  }

  public get roleSelected(): boolean {
    return this.role !== Roles.UNSELECTED;
  }

  public get roleUnselected(): boolean {
    return this.role === Roles.UNSELECTED;
  }

  public get roleJudge(): boolean {
    return this.role === Roles.JUDGE;
  }

  public get rolePlaintiff(): boolean {
    return this.role === Roles.PLAINTIFF;
  }

  public get roleDefendant(): boolean {
    return this.role === Roles.DEFENDANT;
  }

  public get roleWitness(): boolean {
    return this.role === Roles.WITNESS;
  }

  public get roleJury(): boolean {
    return this.role === Roles.JURY;
  }
}
