import { Component, OnInit } from "@angular/core";
import { Witness } from 'src/app/models/Witness.model';
import { CookieHelper } from 'src/app/utilities/cookie.util';
import { WitnessService } from 'src/app/services/witness.service';
import { NavHelperService } from 'src/app/services/nav-helper.service';

@Component({
  selector: "app-witness-table",
  templateUrl: "./witness-table.component.html",
  styleUrls: ["./witness-table.component.css"]
})
export class WitnessTableComponent implements OnInit {
  public witnesses: Witness[] = null;
  public error = false;

  public get canEdit(): boolean {
    return CookieHelper.admin;
  }

  public get ready(): boolean {
    return this.witnesses !== null;
  }

  constructor(
    private witnessService: WitnessService,
    private navHelper: NavHelperService,
  ) { }

  public ngOnInit() {
    this.loadWitnesss();
  }

  public witnessDetails(witness: Witness): void {
    this.navHelper.goToWitnessDetails(witness._id);
  }

  public createWitness(): void {
    this.navHelper.goToWitnessCreateForm();
  }

  public editWitness(witness: Witness): void {
    this.navHelper.goToWitnessEditForm(witness._id);
  }

  public requestDelete(witness: Witness): void {
    const confirmDelete = confirm(`Are you sure you want to delete ${witness.name}?`);
    if (confirmDelete) {
      this.deleteWitness(witness);
    }
  }

  private deleteWitness(witness: Witness): void {
    this.witnessService.deleteWitness(witness._id)
      .subscribe((res) => this.witnesses = res,
        (error) => {
          console.log("delete witness failed");
        }, () => {
          this.loadWitnesss();
        });
  }

  private loadWitnesss(): void {
    this.witnesses = null;
    this.error = false;
    this.witnessService.getWitness()
      .subscribe((res) => this.witnesses = res,
        (error) => {
          this.error = true;
          console.log("get witnesss failed");
        });
  }


}
