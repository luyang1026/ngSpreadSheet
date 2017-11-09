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
var ReporttwoComponent = (function () {
    function ReporttwoComponent(dataservice) {
        this.dataservice = dataservice;
        this.hostStyle = {
            top: '90px',
            bottom: '35px'
        };
        this.showRowOutline = true;
        this.showColumnOutline = true;
        this.rowOutlineInfo = [{ index: 1, count: 4 }, { index: 6, count: 4 }];
        this.columnOutlineInfo = [{ index: 0, count: 4 }];
        this.data = dataservice.getPersonAddressData();
    }
    return ReporttwoComponent;
}());
ReporttwoComponent = __decorate([
    core_1.Component({
        templateUrl: './app-reporttow.component.html'
    }),
    __metadata("design:paramtypes", [app_data_service_1.DataService])
], ReporttwoComponent);
exports.ReporttwoComponent = ReporttwoComponent;
//# sourceMappingURL=app-reporttow.component.js.map