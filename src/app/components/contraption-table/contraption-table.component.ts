import { Component, OnInit } from "@angular/core";
import { ContraptionResource, Contraption } from "src/app/models/Contraption.model";
import { NavHelperService } from "src/app/services/nav-helper.service";
import { ContraptionService } from "src/app/services/contraption.service";
import { CookieHelper } from "src/app/utilities/cookie.util";

@Component({
  selector: "app-contraption-table",
  templateUrl: "./contraption-table.component.html",
  styleUrls: ["./contraption-table.component.css"]
})
export class ContraptionTableComponent implements OnInit {
  public contraptionResource: ContraptionResource = null;
  public error = false;

  public get canEdit(): boolean {
    if (CookieHelper.isLoggedOn) {
      return CookieHelper.getUserDetails().admin;
    } else {
      return false;
    }
  }

  public get ready(): boolean {
    return this.contraptionResource !== null;
  }

  constructor(
    private contraptionService: ContraptionService,
    private navHelper: NavHelperService,
  ) { }

  public ngOnInit() {
    this.loadContraptions();
  }

  public contraptionDetails(contraption: Contraption): void {
    this.navHelper.goToContraptionDetails(contraption._id);
  }

  public createContraption(): void {
    this.navHelper.goToContraptionCreateForm();
  }

  public editContraption(contraption: Contraption): void {
    this.navHelper.goToContraptionEditForm(contraption._id);
  }

  public requestDelete(contraption: Contraption): void {
    const confirmDelete = confirm(`Are you sure you want to delete ${contraption.name}?`);
    if (confirmDelete) {
      this.deleteContraption(contraption);
    }
  }

  private deleteContraption(contraption: Contraption): void {
    this.contraptionService.deleteContraption(contraption._id)
      .subscribe((res) => this.contraptionResource = res,
        (error) => {
          console.log("delete contraption failed");
        }, () => {
          this.loadContraptions();
        });
  }

  private loadContraptions(): void {
    this.contraptionResource = null;
    this.error = false;
    this.contraptionService.getContraptions()
      .subscribe((res) => this.contraptionResource = res,
        (error) => {
          this.error = true;
          console.log("get contraptions failed");
        });
  }

}
