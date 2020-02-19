import { Component, OnInit } from "@angular/core";
import { DoodadResource, Doodad } from "src/app/models/Doodad.model";
import { DoodadService } from "../../services/doodad.service";
import { NavHelperService } from "src/app/services/nav-helper.service";

@Component({
  selector: "app-doodad-table",
  templateUrl: "./doodad-table.component.html",
  styleUrls: ["./doodad-table.component.css"]
})
export class DoodadTableComponent implements OnInit {
  public doodadResource: DoodadResource = null;
  public error = false;

  public get ready(): boolean {
    return this.doodadResource !== null;
  }

  constructor(
    private doodadService: DoodadService,
    private navHelper: NavHelperService,
  ) { }

  public ngOnInit() {
    this.loadDoodads();
  }

  public doodadDetails(doodad: Doodad): void {
    this.navHelper.goToDoodadDetails(doodad._id);
  }

  public createDoodad(): void {
    this.navHelper.goToDoodadCreateForm();
  }

  public editDoodad(doodad: Doodad): void {
    this.navHelper.goToDoodadEditForm(doodad._id);
  }

  public requestDelete(doodad: Doodad): void {
    const confirmDelete = confirm(`Are you sure you want to delete ${doodad.name}?`);
    if (confirmDelete) {
      this.deleteDoodad(doodad);
    }
  }

  private deleteDoodad(doodad: Doodad): void {
    this.doodadService.deleteDoodad(doodad._id)
      .subscribe((res) => this.doodadResource = res,
        (error) => {
          console.log("delete doodad failed");
        }, () => {
          this.loadDoodads();
        });
  }

  private loadDoodads(): void {
    this.doodadResource = null;
    this.error = false;
    this.doodadService.getDoodads()
      .subscribe((res) => this.doodadResource = res,
        (error) => {
          this.error = true;
          console.log("get doodads failed");
        });
  }

}
