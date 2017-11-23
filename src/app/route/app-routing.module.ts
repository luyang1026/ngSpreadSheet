import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {QuickStartComponent} from "../quickStart/app-quickStart.component";
import {SpreadSheetsComponent} from "../spreadSheets/app-spreadSheets.component";
import {WorksheetComponent} from "../worksheet/app-worksheet.component";
import {ColumnComponent} from "../column/app-column.component";
import {DataBindComponent} from "../dataBind/app-dataBind.component";
import {StyleComponent} from "../style/app-style.component";
import {OutlineComponent} from "../outline/app-outline.component";
import {ReportComponent} from "../report/app-report.component";
import {ViewChildComp} from "../playground/playground.component";
import {ReporttwoComponent} from "../reporttow/app-reporttow.component";
import {ReportTestComponent} from '../test/spread_test.component';


const routes: Routes = [
    {path: '', redirectTo: '/reporttest', pathMatch: 'full'},
    {path: 'quick-start', component: QuickStartComponent},
    {path: 'gc-spread-sheets', component: SpreadSheetsComponent},
    {path: 'gc-worksheet', component: WorksheetComponent},
    {path: 'gc-column', component: ColumnComponent},
    {path: 'data-binding', component: DataBindComponent},
    {path: 'style', component: StyleComponent},
    {path: 'outline', component: OutlineComponent},
    {path: 'report', component: ReportComponent},
    {path: 'playground', component: ViewChildComp},
    {path: 'reporttwo', component: ReporttwoComponent},
    {path: 'reporttest', component: ReportTestComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}