"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var app_quickStart_component_1 = require("../quickStart/app-quickStart.component");
var app_spreadSheets_component_1 = require("../spreadSheets/app-spreadSheets.component");
var app_worksheet_component_1 = require("../worksheet/app-worksheet.component");
var app_column_component_1 = require("../column/app-column.component");
var app_dataBind_component_1 = require("../dataBind/app-dataBind.component");
var app_style_component_1 = require("../style/app-style.component");
var app_outline_component_1 = require("../outline/app-outline.component");
var app_report_component_1 = require("../report/app-report.component");
var app_reportone_component_1 = require("../reportone/app-reportone.component");
var app_reporttow_component_1 = require("../reporttow/app-reporttow.component");
var routes = [
    { path: '', redirectTo: '/report', pathMatch: 'full' },
    { path: 'quick-start', component: app_quickStart_component_1.QuickStartComponent },
    { path: 'gc-spread-sheets', component: app_spreadSheets_component_1.SpreadSheetsComponent },
    { path: 'gc-worksheet', component: app_worksheet_component_1.WorksheetComponent },
    { path: 'gc-column', component: app_column_component_1.ColumnComponent },
    { path: 'data-binding', component: app_dataBind_component_1.DataBindComponent },
    { path: 'style', component: app_style_component_1.StyleComponent },
    { path: 'outline', component: app_outline_component_1.OutlineComponent },
    { path: 'report', component: app_report_component_1.ReportComponent },
    { path: 'reportone', component: app_reportone_component_1.ReportoneComponent },
    { path: 'reporttwo', component: app_reporttow_component_1.ReporttwoComponent },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map