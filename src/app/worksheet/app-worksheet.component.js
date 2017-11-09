"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var app_data_service_1 = require("../app-data.service");
var WorksheetComponent = (function () {
    function WorksheetComponent(dataservice) {
        this.dataservice = dataservice;
        this.hostStyle = {
            top: '90px',
            bottom: '215px'
        };
        this.rowHeaderVisible = true;
        this.columnHeaderVisible = true;
        this.frozenRowCount = 3;
        this.frozenColumnCount = 2;
        this.frozenTrailingRowCount = 0;
        this.frozenTrailingColumnCount = 0;
        this.rowCount = 200;
        this.columnCount = 20;
        this.sheetTabColor = '#61E6E6';
        this.forzenlineColor = '#000000';
        this.selectionBackColor = '#D0D0D0';
        this.selectionBorderColor = '#217346';
        this.data = dataservice.getPersonAddressData();
    }
    return WorksheetComponent;
}());
WorksheetComponent = __decorate([
    core_1.Component({
        templateUrl: './app-worksheet.component.html'
    }),
    __metadata("design:paramtypes", [app_data_service_1.DataService])
], WorksheetComponent);
exports.WorksheetComponent = WorksheetComponent;
//# sourceMappingURL=app-worksheet.component.js.map