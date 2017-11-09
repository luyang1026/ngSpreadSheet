import {NgModule}      from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent}  from "./app.component";
import {AppRoutingModule} from "./route/app-routing.module";
import {QuickStartComponent} from "./quickStart/app-quickStart.component";
import {SpreadSheetsComponent} from "./spreadSheets/app-spreadSheets.component";
import {WorksheetComponent} from "./worksheet/app-worksheet.component";
import {ColumnComponent} from "./column/app-column.component";
import {DataBindComponent} from "./dataBind/app-dataBind.component";
import {SpreadSheetsModule} from "./lib/gc.spread.sheets.angular2.10.2.0";
import {FormsModule} from "@angular/forms";
import {ToNumberPipe} from "./app.component.toNumberPipe";
import {StyleComponent} from "./style/app-style.component";
import {OutlineComponent} from "./outline/app-outline.component";
import {ReportComponent} from "./report/app-report.component";
import {ReportoneComponent} from "./reportone/app-reportone.component";
import {ReporttwoComponent} from "./reporttow/app-reporttow.component";
import {DataService} from "./app-data.service";

import {ReportDataService} from "./service/report1.service";
import { MyGC } from "./service/myGC.service"


@NgModule({
    imports: [BrowserModule, AppRoutingModule, SpreadSheetsModule, FormsModule],
    declarations: [
        AppComponent,
        QuickStartComponent,
        SpreadSheetsComponent,
        WorksheetComponent,
        ColumnComponent,
        DataBindComponent,
        StyleComponent,
        OutlineComponent,
        ReportComponent,
        ReportoneComponent,
        ReporttwoComponent,
        ToNumberPipe,        
    ],
    providers: [DataService,ReportDataService,MyGC],
    bootstrap: [AppComponent]
})
export class AppModule {
}
