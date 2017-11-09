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
//<reference path="../lib/GC.Spread.Sheets.d.ts"/>
var core_1 = require("@angular/core");
var report1_service_1 = require("../service/report1.service");
var myGC_service_1 = require("../service/myGC.service");
var ReportComponent = (function () {
    function ReportComponent(dataservice) {
        this.dataservice = dataservice;
        this.hostStyle = {
            top: '90px',
            bottom: '35px'
        };
        this.showRowOutline = true;
        this.showColumnOutline = true;
        this.rowOutlineInfo = [{ index: 1, count: 4 }, { index: 6, count: 4 }];
        this.columnOutlineInfo = [{ index: 0, count: 4 }];
        this.colHeader = ['类别', '项目', '金额'];
        this.formatter = "#.00";
        // console.log(this.myGC.cellType)
        console.log(myGC_service_1.MyGC.cellType);
    }
    ReportComponent.prototype.workbookInit = function (ev) {
        var _this = this;
        this.spread = ev.spread;
        this.sheet = this.spread.getActiveSheet();
        for (var i = 0; i < this.colHeader.length; ++i) {
            this.setCell(0, i, this.colHeader[i], GC.Spread.Sheets.SheetArea.colHeader);
        }
        for (var i = 0; i < this.data.length; ++i) {
            this.setCell(i, 1, this.data[i].content);
            this.addComment(i, 1, this.data[i].comment);
            if (this.data[i].plus) {
                this.addPlus(i, 2);
                this.vhAlignCenter(this.sheet.getCell(i, 2));
            }
        }
        this.sheet.autoFitColumn(1);
        this.lockArea([this.sheet.getRange(0, 2, 38, 2)]);
        this.cata.reduce(function (pre, cur, index, arr) {
            _this.sheet.addSpan(pre.span, 0, cur.span, 1);
            _this.setCell(pre.span, 0, cur.name);
            _this.sheet.getCell(pre.span, 0).wordWrap(true);
            _this.vhAlignCenter(_this.sheet.getCell(pre.span, 0));
            return { span: pre.span + cur.span };
        }, { span: 0 });
    };
    ReportComponent.prototype.setCell = function (row, col, value, target) {
        this.sheet.setValue(row, col, value, target);
    };
    ReportComponent.prototype.vhAlignCenter = function (cell) {
        cell.vAlign(GC.Spread.Sheets.VerticalAlign.center);
        cell.hAlign(GC.Spread.Sheets.HorizontalAlign.center);
    };
    ReportComponent.prototype.lockArea = function (range) {
        this.sheet.options.isProtected = true;
        for (var _i = 0, range_1 = range; _i < range_1.length; _i++) {
            var area = range_1[_i];
            area.locked(false);
        }
    };
    ReportComponent.prototype.addComment = function (row, col, comment) {
        this.sheet.comments.add(row, col, comment)
            .lockText(false)
            .locked(false)
            .dynamicMove(true)
            .dynamicSize(true);
    };
    ReportComponent.prototype.addPlus = function (row, col) {
        var btn = new GC.Spread.Sheets.CellTypes.Button();
        btn.buttonBackColor("#ccc");
        btn.text("+");
        btn.marginLeft(25);
        btn.marginTop(5);
        this.sheet.getCell(row, col).cellType(btn);
    };
    ReportComponent.prototype.testCostom = function () {
    };
    ReportComponent.prototype.ngOnInit = function () {
        this.data = this.dataservice.report();
        this.cata = this.dataservice.reportCata();
    };
    return ReportComponent;
}());
ReportComponent = __decorate([
    core_1.Component({
        templateUrl: './app-report.component.html'
    }),
    __metadata("design:paramtypes", [report1_service_1.ReportDataService])
], ReportComponent);
exports.ReportComponent = ReportComponent;
//# sourceMappingURL=app-report.component.js.map