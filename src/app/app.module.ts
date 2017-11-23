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
import {ViewChildComp,Pane} from "./playground/playground.component";
import {ReporttwoComponent} from "./reporttow/app-reporttow.component";
import {ReportTestComponent} from "./test/spread_test.component";
import {DataService} from "./app-data.service";
import {ReportDataService} from "./service/report1.service";
import { CustomCellType } from "./service/myGC.service"
import { DxPopupModule, DxButtonModule, DxTemplateModule,DxTreeViewModule,DxTreeListModule } from 'devextreme-angular';

@NgModule({
    imports: [
        BrowserModule, AppRoutingModule, SpreadSheetsModule, FormsModule,DxPopupModule, DxButtonModule, DxTemplateModule,
        DxTreeViewModule,DxTreeListModule
    ],
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
        ViewChildComp,
        Pane,
        ReporttwoComponent,
        ToNumberPipe,
        ReportTestComponent
    ],
    providers: [DataService,ReportDataService,CustomCellType],
    bootstrap: [AppComponent]
})
export class AppModule {
}
