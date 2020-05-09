import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";

import {AppComponent} from "./app.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {InfoComponent} from "./components/info/info.component";
import {AppRoutingModule} from "./app-routing.module";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {FooterComponent} from "./components/footer/footer.component";
import {HttpClientModule} from "@angular/common/http";
import {ActuatorReportComponent} from "./components/actuator-report/actuator-report.component";
import {LoginComponent} from "./components/login/login.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {AdminComponent} from "./components/admin/admin.component";
import {EvidenceOverviewComponent} from "./components/evidence-overview/evidence-overview.component";
import {EvidenceDisplayComponent} from "./components/evidence-display/evidence-display.component";
import {EvidenceFormComponent} from "./components/evidence-form/evidence-form.component";
import {WitnessFormComponent} from "./components/witness-form/witness-form.component";
import {WitnessDisplayComponent} from "./components/witness-display/witness-display.component";
import {WitnessOverviewComponent} from "./components/witness-overview/witness-overview.component";
import {IssueOverviewComponent} from "./components/issue-overview/issue-overview.component";
import {IssueFormComponent} from "./components/issue-form/issue-form.component";
import {IssueDisplayComponent} from "./components/issue-display/issue-display.component";
import {IssueTableComponent} from "./components/issue-table/issue-table.component";
import {WitnessTableComponent} from "./components/witness-table/witness-table.component";
import {EvidenceTableComponent} from "./components/evidence-table/evidence-table.component";
import {CaseDisplayComponent} from "./components/case-display/case-display.component";
import {OpenCaseTableComponent} from "./components/open-case-table/open-case-table.component";
import {CaseOverviewComponent} from "./components/case-overview/case-overview.component";
import {RoleSelectComponent} from "./components/role-select/role-select.component";
import {JudgeComponent} from "./components/judge/judge.component";
import {PlaintiffComponent} from "./components/plaintiff/plaintiff.component";
import {DefendantComponent} from "./components/defendant/defendant.component";
import {WitnessComponent} from "./components/witness/witness.component";
import {JuryComponent} from "./components/jury/jury.component";
import {RulesComponent} from "./components/rules/rules.component";
import {RevelationsComponent} from "./components/revelations/revelations.component";
import {CaseSelectComponent} from "./components/case-select/case-select.component";
import {CaseArchiveComponent} from "./components/case-archive/case-archive.component";
import {ClosedCaseTableComponent} from "./components/closed-case-table/closed-case-table.component";
import {HeaderComponent} from "./components/header/header.component";
import {BodyComponent} from "./components/body/body.component";
import {LoadingComponent} from "./components/loading/loading.component";
import {CardComponent} from "./components/card/card.component";
import {ArchivedCaseComponent} from "./components/archived-case/archived-case.component";
import {AdvancedModalBoxComponent} from "./components/advanced-modal-box/advanced-modal-box.component";
import {ModalTriggerButtonComponent} from "./components/modal-trigger-button/modal-trigger-button.component";
import {AccordionTriggerComponent} from "./components/accordion-trigger/accordion-trigger.component";
import {AccordionAreaComponent} from "./components/accordion-area/accordion-area.component";
import {ExtrasComponent} from "./components/extras/extras.component";
import {RandomContentComponent} from "./components/random-content/random-content.component";
import {CreditsComponent} from "./components/credits/credits.component";
import {BasicModalBoxComponent} from "./components/basic-modal-box/basic-modal-box.component";
import { RulesDisplayComponent } from "./components/rules-display/rules-display.component";
import { CaseCreateComponent } from "./components/case-create/case-create.component";
import { PlaytestComponent } from "./components/playtest/playtest.component";

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
    CaseDisplayComponent,
    OpenCaseTableComponent,
    CaseOverviewComponent,
    RoleSelectComponent,
    JudgeComponent,
    PlaintiffComponent,
    DefendantComponent,
    WitnessComponent,
    JuryComponent,
    RulesComponent,
    RevelationsComponent,
    CaseSelectComponent,
    CaseArchiveComponent,
    ClosedCaseTableComponent,
    HeaderComponent,
    BodyComponent,
    LoadingComponent,
    CardComponent,
    ArchivedCaseComponent,
    AdvancedModalBoxComponent,
    ModalTriggerButtonComponent,
    AccordionTriggerComponent,
    AccordionAreaComponent,
    ExtrasComponent,
    RandomContentComponent,
    CreditsComponent,
    BasicModalBoxComponent,
    RulesDisplayComponent,
    CaseCreateComponent,
    PlaytestComponent,
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
