import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { InfoComponent } from "./components/info/info.component";
import { AppRoutingModule } from "./app-routing.module";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HttpClientModule } from "@angular/common/http";
import { ActuatorReportComponent } from "./components/actuator-report/actuator-report.component";
import { LoginComponent } from "./components/login/login.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { AdminComponent } from "./components/admin/admin.component";
import { EvidenceOverviewComponent } from "./components/evidence-overview/evidence-overview.component";
import { EvidenceDisplayComponent } from "./components/evidence-display/evidence-display.component";
import { EvidenceFormComponent } from "./components/evidence-form/evidence-form.component";
import { WitnessFormComponent } from "./components/witness-form/witness-form.component";
import { WitnessDisplayComponent } from "./components/witness-display/witness-display.component";
import { WitnessOverviewComponent } from "./components/witness-overview/witness-overview.component";
import { IssueOverviewComponent } from "./components/issue-overview/issue-overview.component";
import { IssueFormComponent } from "./components/issue-form/issue-form.component";
import { IssueDisplayComponent } from "./components/issue-display/issue-display.component";
import { IssueTableComponent } from "./components/issue-table/issue-table.component";
import { WitnessTableComponent } from "./components/witness-table/witness-table.component";
import { EvidenceTableComponent } from "./components/evidence-table/evidence-table.component";
import { UserOverviewComponent } from "./components/user-overview/user-overview.component";
import { CaseDisplayComponent } from "./components/case-display/case-display.component";
import { CaseTableComponent } from "./components/case-table/case-table.component";
import { CaseOverviewComponent } from "./components/case-overview/case-overview.component";
import { UserTableComponent } from "./components/user-table/user-table.component";
import { RoleSelectComponent } from "./components/role-select/role-select.component";
import { JudgeComponent } from "./components/judge/judge.component";
import { PlaintiffComponent } from "./components/plaintiff/plaintiff.component";
import { DefendantComponent } from "./components/defendant/defendant.component";
import { WitnessComponent } from "./components/witness/witness.component";
import { JuryComponent } from "./components/jury/jury.component";
import { IssueBlockComponent } from "./components/issue-block/issue-block.component";
import { CaseBuilderComponent } from "./components/case-builder/case-builder.component";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InfoComponent,
    NavbarComponent,
    FooterComponent,
    ActuatorReportComponent,
    LoginComponent,
    ProfileComponent,
    AdminComponent,
    EvidenceOverviewComponent,
    EvidenceDisplayComponent,
    EvidenceFormComponent,
    WitnessFormComponent,
    WitnessDisplayComponent,
    WitnessOverviewComponent,
    IssueOverviewComponent,
    IssueFormComponent,
    IssueDisplayComponent,
    IssueTableComponent,
    WitnessTableComponent,
    EvidenceTableComponent,
    UserOverviewComponent,
    CaseDisplayComponent,
    CaseTableComponent,
    CaseOverviewComponent,
    UserTableComponent,
    RoleSelectComponent,
    JudgeComponent,
    PlaintiffComponent,
    DefendantComponent,
    WitnessComponent,
    JuryComponent,
    IssueBlockComponent,
    CaseBuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
