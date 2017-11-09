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
var SpreadSheetsComponent = (function () {
    function SpreadSheetsComponent(dataservice) {
        this.dataservice = dataservice;
        this.hostStyle = {
            top: '90px',
            bottom: '130px'
        };
        this.newTabVisible = true;
        this.tabStripVisible = true;
        this.showHorizontalScrollbar = true;
        this.showVerticalScrollbar = true;
        this.allowUserZoom = true;
        this.allowUserResize = true;
        this.spreadBackColor = '#FFFFFF';
        this.grayAreaBackColor = '#E4E4E4';
        this.data = dataservice.getPersonAddressData();
    }
    return SpreadSheetsComponent;
}());
SpreadSheetsComponent = __decorate([
    core_1.Component({
        templateUrl: './app-spreadSheets.component.html'
    }),
    __metadata("design:paramtypes", [app_data_service_1.DataService])
], SpreadSheetsComponent);
exports.SpreadSheetsComponent = SpreadSheetsComponent;
//# sourceMappingURL=app-spreadSheets.component.js.map