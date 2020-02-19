import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ROUTES_ENUM } from "../constants/routing.constants";

@Injectable({
  providedIn: "root"
})
export class NavHelperService {

  constructor(
    private router: Router,
  ) { }

  public goToDashboard(): void {
    this.goToRoute(ROUTES_ENUM.Dashboard);
  }

  public goToInfo(): void {
    this.goToRoute(ROUTES_ENUM.Info);
  }

  public goToProfile(): void {
    this.goToRoute(ROUTES_ENUM.Profile);
  }

  public goToAdmin(): void {
    this.goToRoute(ROUTES_ENUM.Admin);
  }

  public goToLogin(): void {
    this.goToRoute(ROUTES_ENUM.Login);
  }

  public goToRegister(): void {
    this.goToRoute(ROUTES_ENUM.Register);
  }

  public goToContraptionOverview(): void {
    this.goToRoute(ROUTES_ENUM.ContraptionOverview);
  }

  public goToContraptionDetails(contraptionId: string): void {
    this.goToRoutes([ROUTES_ENUM.ContraptionDetails, contraptionId]);
  }

  public goToContraptionCreateForm(): void {
    this.goToRoute(ROUTES_ENUM.ContraptionForm);
  }

  public goToContraptionEditForm(contraptionId: string): void {
    this.goToRoutes([ROUTES_ENUM.ContraptionForm, contraptionId]);
  }

  private goToRoute(route: string): void {
    this.goToRoutes([route]);
  }

  private goToRoutes(routes: string[]): void {
    this.router.navigate(routes);
  }
}
