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
import { WidgetDisplayComponent } from "./components/widget-display/widget-display.component";
import { WidgetOverviewComponent } from "./components/widget-overview/widget-overview.component";
import { DoodadOverviewComponent } from "./components/doodad-overview/doodad-overview.component";
import { DoodadDisplayComponent } from "./components/doodad-display/doodad-display.component";
import { WidgetFormComponent } from "./components/widget-form/widget-form.component";
import { DoodadFormComponent } from "./components/doodad-form/doodad-form.component";
import { DoodadTableComponent } from "./components/doodad-table/doodad-table.component";
import { WidgetTableComponent } from "./components/widget-table/widget-table.component";
import { ActuatorReportComponent } from "./components/actuator-report/actuator-report.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { ContraptionDisplayComponent } from "./components/contraption-display/contraption-display.component";
import { ContraptionFormComponent } from "./components/contraption-form/contraption-form.component";
import { ContraptionOverviewComponent } from "./components/contraption-overview/contraption-overview.component";
import { ContraptionTableComponent } from "./components/contraption-table/contraption-table.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { AdminComponent } from "./components/admin/admin.component";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InfoComponent,
    NavbarComponent,
    FooterComponent,
    WidgetDisplayComponent,
    WidgetOverviewComponent,
    DoodadOverviewComponent,
    DoodadDisplayComponent,
    WidgetFormComponent,
    DoodadFormComponent,
    DoodadTableComponent,
    WidgetTableComponent,
    ActuatorReportComponent,
    LoginComponent,
    RegisterComponent,
    ContraptionDisplayComponent,
    ContraptionFormComponent,
    ContraptionOverviewComponent,
    ContraptionTableComponent,
    ProfileComponent,
    AdminComponent
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
