import { Component, OnInit } from "@angular/core";
import { Witness } from 'src/app/models/Witness.model';
import { BooleanHelper } from 'src/app/utilities/boolean.util';
import { WitnessService } from 'src/app/services/witness.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-witness-display",
  templateUrl: "./witness-display.component.html",
  styleUrls: ["./witness-display.component.css"]
})
export class WitnessDisplayComponent implements OnInit {
  public witness: Witness = null;

  public get ready(): boolean {
    return BooleanHelper.notNull(this.witness);
  }

  constructor(
    private witnessService: WitnessService,
    private route: ActivatedRoute,
  ) { }

  public ngOnInit() {
    this.loadContraption();
  }

  private loadContraption(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.witnessService.getSingleWitness(id)
      .subscribe((res) => this.witness = res,
        (error) => {
          console.log("get witness failed");
        });
  }

}
