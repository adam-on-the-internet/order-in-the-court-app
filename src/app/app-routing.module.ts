import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { InfoComponent } from "./components/info/info.component";
import { ROUTES_ENUM } from "./constants/routing.constants";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { AdminComponent } from "./components/admin/admin.component";
import { EvidenceOverviewComponent } from "./components/evidence-overview/evidence-overview.component";
import { EvidenceDisplayComponent } from "./components/evidence-display/evidence-display.component";
import { EvidenceFormComponent } from "./components/evidence-form/evidence-form.component";
import { IssueOverviewComponent } from "./components/issue-overview/issue-overview.component";
import { IssueDisplayComponent } from "./components/issue-display/issue-display.component";
import { IssueFormComponent } from "./components/issue-form/issue-form.component";
import { WitnessOverviewComponent } from "./components/witness-overview/witness-overview.component";
import { WitnessDisplayComponent } from "./components/witness-display/witness-display.component";
import { WitnessFormComponent } from "./components/witness-form/witness-form.component";
import { CourtroomComponent } from "./components/courtroom/courtroom.component";

const routes: Routes = [
  // main
  { path: ROUTES_ENUM.Dashboard, component: DashboardComponent },
  { path: ROUTES_ENUM.Info, component: InfoComponent },
  { path: ROUTES_ENUM.Login, component: LoginComponent },
  { path: ROUTES_ENUM.Register, component: RegisterComponent },
  { path: ROUTES_ENUM.Profile, component: ProfileComponent },
  { path: ROUTES_ENUM.Admin, component: AdminComponent },
  { path: ROUTES_ENUM.CourtRoom + "/:id", component: CourtroomComponent },
  // evidence
  { path: ROUTES_ENUM.EvidenceOverview, component: EvidenceOverviewComponent },
  { path: ROUTES_ENUM.EvidenceDetails + "/:id", component: EvidenceDisplayComponent },
  { path: ROUTES_ENUM.EvidenceForm, component: EvidenceFormComponent },
  { path: ROUTES_ENUM.EvidenceForm + "/:id", component: EvidenceFormComponent },
  // witness
  { path: ROUTES_ENUM.WitnessOverview, component: WitnessOverviewComponent },
  { path: ROUTES_ENUM.WitnessDetails + "/:id", component: WitnessDisplayComponent },
  { path: ROUTES_ENUM.WitnessForm, component: WitnessFormComponent },
  { path: ROUTES_ENUM.WitnessForm + "/:id", component: WitnessFormComponent },
  // issue
  { path: ROUTES_ENUM.IssueOverview, component: IssueOverviewComponent },
  { path: ROUTES_ENUM.IssueDetails + "/:id", component: IssueDisplayComponent },
  { path: ROUTES_ENUM.IssueForm, component: IssueFormComponent },
  { path: ROUTES_ENUM.IssueForm + "/:id", component: IssueFormComponent },
  // default
  { path: "**", redirectTo: "dashboard" },
];

@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
