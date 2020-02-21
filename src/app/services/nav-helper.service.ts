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

  // COURTROOM

  public goToCourtroom(caseId: string): void {
    this.goToRoutes([ROUTES_ENUM.CourtRoom, caseId]);
  }

  public goToRoleSelect(caseId: string): void {
    this.goToRoutes([ROUTES_ENUM.RoleSelect, caseId]);
  }

  public goToJudge(caseId: string): void {
    this.goToRoutes([ROUTES_ENUM.Judge, caseId]);
  }

  // EVIDENCE

  public goToEvidenceOverview(): void {
    this.goToRoute(ROUTES_ENUM.EvidenceOverview);
  }

  public goToEvidenceDetails(evidenceId: string): void {
    this.goToRoutes([ROUTES_ENUM.EvidenceDetails, evidenceId]);
  }

  public goToEvidenceCreateForm(): void {
    this.goToRoute(ROUTES_ENUM.EvidenceForm);
  }

  public goToEvidenceEditForm(evidenceId: string): void {
    this.goToRoutes([ROUTES_ENUM.EvidenceForm, evidenceId]);
  }

  // WITNESS

  public goToWitnessOverview(): void {
    this.goToRoute(ROUTES_ENUM.WitnessOverview);
  }

  public goToWitnessDetails(witnessId: string): void {
    this.goToRoutes([ROUTES_ENUM.WitnessDetails, witnessId]);
  }

  public goToWitnessCreateForm(): void {
    this.goToRoute(ROUTES_ENUM.WitnessForm);
  }

  public goToWitnessEditForm(witnessId: string): void {
    this.goToRoutes([ROUTES_ENUM.WitnessForm, witnessId]);
  }

  // ISSUE

  public goToIssueOverview(): void {
    this.goToRoute(ROUTES_ENUM.IssueOverview);
  }

  public goToIssueDetails(issueId: string): void {
    this.goToRoutes([ROUTES_ENUM.IssueDetails, issueId]);
  }

  public goToIssueCreateForm(): void {
    this.goToRoute(ROUTES_ENUM.IssueForm);
  }

  public goToIssueEditForm(issueId: string): void {
    this.goToRoutes([ROUTES_ENUM.IssueForm, issueId]);
  }

  // CASE

  public goToCaseOverview(): void {
    this.goToRoute(ROUTES_ENUM.CaseOverview);
  }

  public goToCaseDetails(caseId: string): void {
    this.goToRoutes([ROUTES_ENUM.CaseDetails, caseId]);
  }

  // USER

  public goToUserOverview(): void {
    this.goToRoute(ROUTES_ENUM.UserOverview);
  }

  // GENERAL

  private goToRoute(route: string): void {
    this.goToRoutes([route]);
  }

  private goToRoutes(routes: string[]): void {
    this.router.navigate(routes);
  }
}
