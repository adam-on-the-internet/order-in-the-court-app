import {Component} from "@angular/core";

@Component({
  selector: "app-credits",
  templateUrl: "./credits.component.html",
  styleUrls: ["./credits.component.scss"]
})
export class CreditsComponent {
  public playtesters: string[] = [
    "Isaac",
    "Megan",
    "Will",
    "Tim",
    "Adam",
    "Shayla",
    "Ben",
    "Darby",
    "Michael",
    "Eli",
    "Olli Lehmann",
    "Tori",
    "Melissa",
    "Joey",
    "Blake",
    "Meredith",
    "Rowen",
    "Lesley",
    "Rhi",
    "Isiah",
  ];
}
