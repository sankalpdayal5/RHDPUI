import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { AppRoutes } from "../app/app.routes";
import { IndexComponent } from './Pages/index/index.component';
import { InformationComponent } from './Pages/information/information.component';
import { HeaderComponent } from './UserControls/header/header.component';
import { SidebarComponent } from './UserControls/sidebar/sidebar.component';
import { LatestTimersComponent } from './Pages/latest-timers/latest-timers.component';
import { StatisticsComponent } from './Pages/statistics/statistics.component';
import { ReportsComponent } from './Pages/reports/reports.component';
import { ConnStatusComponent } from './Pages/conn-status/conn-status.component';
import { UpdateComponent } from './Pages/update/update.component';
import { AgmCoreModule } from '@agm/core';
import { DataService } from "./Services/data.service";
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    InformationComponent,
    HeaderComponent,
    SidebarComponent,
    LatestTimersComponent,
    StatisticsComponent,
    ReportsComponent,
    ConnStatusComponent,
    UpdateComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCwBtsTZx0Nst1QzSExkvEEDbVb2WTGBEE'
    })
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
