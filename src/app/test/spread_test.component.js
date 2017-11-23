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
var report1_service_1 = require("../service/report1.service");
var costomRenderer_service_1 = require("../service/costomRenderer.service");
var ReportTestComponent = (function () {
    function ReportTestComponent(dataservice) {
        this.dataservice = dataservice;
        this.hostStyle = {
            width: '100%',
            height: '600px'
        };
        this.testData = [
            {
                path: 'c11',
                name: '科目11',
                children_json: [
                    {
                        path: 'c2',
                        name: '科目21'
                    },
                    {
                        path: 'c21',
                        name: '科目22',
                        children_json: [
                            { path: 'c3', name: '科目31' }
                        ]
                    }
                ]
            },
            {
                path: 'c12',
                name: '科目12'
            }
        ];
        this.data = dataservice.reportA100400();
        this.balanceList = dataservice.reportResponse().body.balanceList_json;
        this.title = dataservice.reportResponse().body.K_KMQC;
    }
    ReportTestComponent.prototype.cancel = function () {
        this.popupVisible = false;
    };
    ReportTestComponent.prototype.workbookInit = function (ev) {
        var _this = this;
        this.spread = ev.spread;
        this.spread.suspendPaint();
        this.spread.fromJSON(this.data);
        this.spread.resumePaint();
        this.sheet = this.spread.getActiveSheet();
        var tagCells = new costomRenderer_service_1.CustomTagRenderer(this.spread, this.data);
        tagCells.addListener('customCellClick', function (data) {
            _this.popupVisible = true;
        });
        this.sheet.setTag(0, 0, 'test');
    };
    return ReportTestComponent;
}());
ReportTestComponent = __decorate([
    core_1.Component({
        templateUrl: './spread_test.component.html'
    }),
    __metadata("design:paramtypes", [report1_service_1.ReportDataService])
], ReportTestComponent);
exports.ReportTestComponent = ReportTestComponent;
//# sourceMappingURL=spread_test.component.js.map