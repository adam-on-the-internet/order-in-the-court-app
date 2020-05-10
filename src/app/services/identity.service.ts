import {Injectable} from "@angular/core";
import {BooleanHelper} from "../utilities/boolean.util";

@Injectable({
  providedIn: "root"
})
export class IdentityService {
  public playerName: string = null;
}
