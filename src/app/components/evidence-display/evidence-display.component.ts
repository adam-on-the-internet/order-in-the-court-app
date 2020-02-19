import { Component, OnInit } from "@angular/core";
import { Evidence } from 'src/app/models/Evidence.model';
import { BooleanHelper } from 'src/app/utilities/boolean.util';
import { ActivatedRoute } from '@angular/router';
import { EvidenceService } from 'src/app/services/evidence.service';

@Component({
  selector: "app-evidence-display",
  templateUrl: "./evidence-display.component.html",
  styleUrls: ["./evidence-display.component.css"]
})
export class EvidenceDisplayComponent implements OnInit {
  public evidence: Evidence = null;

  public get ready(): boolean {
    return BooleanHelper.notNull(this.evidence);
  }

  constructor(
    private evidenceService: EvidenceService,
    private route: ActivatedRoute,
  ) { }

  public ngOnInit() {
    this.loadContraption();
  }

  private loadContraption(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.evidenceService.getSingleEvidence(id)
      .subscribe((res) => this.evidence = res,
        (error) => {
          console.log("get evidence failed");
        });
  }

}
