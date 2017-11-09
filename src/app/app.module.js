"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./route/app-routing.module");
var app_quickStart_component_1 = require("./quickStart/app-quickStart.component");
var app_spreadSheets_component_1 = require("./spreadSheets/app-spreadSheets.component");
var app_worksheet_component_1 = require("./worksheet/app-worksheet.component");
var app_column_component_1 = require("./column/app-column.component");
var app_dataBind_component_1 = require("./dataBind/app-dataBind.component");
var gc_spread_sheets_angular2_10_2_0_1 = require("./lib/gc.spread.sheets.angular2.10.2.0");
var forms_1 = require("@angular/forms");
var app_component_toNumberPipe_1 = require("./app.component.toNumberPipe");
var app_style_component_1 = require("./style/app-style.component");
var app_outline_component_1 = require("./outline/app-outline.component");
var app_report_component_1 = require("./report/app-report.component");
var app_reportone_component_1 = require("./reportone/app-reportone.component");
var app_reporttow_component_1 = require("./reporttow/app-reporttow.component");
var app_data_service_1 = require("./app-data.service");
var report1_service_1 = require("./service/report1.service");
var myGC_service_1 = require("./service/myGC.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, app_routing_module_1.AppRoutingModule, gc_spread_sheets_angular2_10_2_0_1.SpreadSheetsModule, forms_1.FormsModule],
        declarations: [
            app_component_1.AppComponent,
            app_quickStart_component_1.QuickStartComponent,
            app_spreadSheets_component_1.SpreadSheetsComponent,
            app_worksheet_component_1.WorksheetComponent,
            app_column_component_1.ColumnComponent,
            app_dataBind_component_1.DataBindComponent,
            app_style_component_1.StyleComponent,
            app_outline_component_1.OutlineComponent,
            app_report_component_1.ReportComponent,
            app_reportone_component_1.ReportoneComponent,
            app_reporttow_component_1.ReporttwoComponent,
            app_component_toNumberPipe_1.ToNumberPipe,
        ],
        providers: [app_data_service_1.DataService, report1_service_1.ReportDataService, myGC_service_1.MyGC],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map