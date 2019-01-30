import { IndexComponent } from './Pages/index/index.component';
import { InformationComponent } from './Pages/information/information.component';
import { LatestTimersComponent } from './Pages/latest-timers/latest-timers.component';
import { StatisticsComponent } from './Pages/statistics/statistics.component';
import { ReportsComponent } from "./Pages/reports/reports.component";
import { ConnStatusComponent } from "./Pages/conn-status/conn-status.component";
import { UpdateComponent } from "./Pages/update/update.component";

export const AppRoutes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path: 'home',
        component: IndexComponent
    },
    {
        path: 'Index',
        component: IndexComponent
    },
    {
        path: 'information',
        component: InformationComponent
    },
    {
        path: 'latest-timers',
        component: LatestTimersComponent
    },
    {
        path: 'statistics',
        component: StatisticsComponent
    },
    {
        path: 'reports',
        component: ReportsComponent
    },
    {
        path: 'connstats',
        component: ConnStatusComponent
    },
    {
        path: 'update',
        component: UpdateComponent
    },
];