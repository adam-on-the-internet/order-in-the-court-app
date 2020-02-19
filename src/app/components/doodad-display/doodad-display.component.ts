import { Component, OnInit } from "@angular/core";
import { Doodad } from "src/app/models/Doodad.model";
import { DoodadService } from "src/app/services/doodad.service";
import { BooleanHelper } from "src/app/utilities/boolean.util";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-doodad-display",
  templateUrl: "./doodad-display.component.html",
  styleUrls: ["./doodad-display.component.css"]
})
export class DoodadDisplayComponent implements OnInit {
  public doodad: Doodad = null;

  public get ready(): boolean {
    return BooleanHelper.notNull(this.doodad);
  }

  constructor(
    private doodadService: DoodadService,
    private route: ActivatedRoute,
  ) { }

  public ngOnInit() {
    this.loadDoodad();
  }

  private loadDoodad(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.doodadService.getSingleDoodad(id)
      .subscribe((res) => this.doodad = res,
        (error) => {
          console.log("get doodad failed");
        });
  }

}
