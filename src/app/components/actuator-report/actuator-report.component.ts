import { Component, OnInit, Input } from "@angular/core";
import { ActuatorService } from "src/app/services/actuator.service";
import { BooleanHelper } from "src/app/utilities/boolean.util";

@Component({
  selector: "app-actuator-report",
  templateUrl: "./actuator-report.component.html",
  styleUrls: ["./actuator-report.component.css"]
})
export class ActuatorReportComponent implements OnInit {
  @Input() public serviceUrl: string = null;
  @Input() public serviceName: string = null;

  public status: any = null;

  public get ready(): boolean {
    return BooleanHelper.hasValue(this.status);
  }

  public get showReport(): boolean {
    return BooleanHelper.hasValue(this.serviceUrl) && BooleanHelper.hasValue(this.serviceName);
  }

  constructor(
    private actuatorService: ActuatorService,
  ) { }

  public ngOnInit() {
    if (this.showReport) {
      this.checkActuator();
    }
  }

  public checkActuator() {
    this.status = null;
    this.actuatorService.checkHealth(this.serviceUrl)
      .subscribe((res) => this.status = res,
        (error) => {
          this.status = {
            status: "ERROR",
          };
        });
  }

}
