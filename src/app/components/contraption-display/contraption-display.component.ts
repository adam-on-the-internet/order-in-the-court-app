import { Component, OnInit } from "@angular/core";
import { Contraption } from "src/app/models/Contraption.model";
import { BooleanHelper } from "src/app/utilities/boolean.util";
import { ContraptionService } from "src/app/services/contraption.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-contraption-display",
  templateUrl: "./contraption-display.component.html",
  styleUrls: ["./contraption-display.component.css"]
})
export class ContraptionDisplayComponent implements OnInit {
  public contraption: Contraption = null;

  public get ready(): boolean {
    return BooleanHelper.notNull(this.contraption);
  }

  constructor(
    private contraptionService: ContraptionService,
    private route: ActivatedRoute,
  ) { }

  public ngOnInit() {
    this.loadContraption();
  }

  private loadContraption(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.contraptionService.getSingleContraption(id)
      .subscribe((res) => this.contraption = res,
        (error) => {
          console.log("get doodad failed");
        });
  }

}
