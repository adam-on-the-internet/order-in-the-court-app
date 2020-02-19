import { Component } from "@angular/core";
import { ServiceUrl } from "src/app/constants/rest.constants";

@Component({
  selector: "app-info",
  templateUrl: "./info.component.html",
  styleUrls: ["./info.component.css"]
})
export class InfoComponent {
  public basicExpressServiceUrl = ServiceUrl.BasicExpress;
}
