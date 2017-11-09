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
var ColumnComponent = (function () {
    function ColumnComponent() {
        this.hostStyle = {
            top: '90px',
            bottom: '74px'
        };
        this.visible = true;
        this.resizable = true;
        this.width = 300;
        this.formatter = '$ #.00';
        var dataTable = [];
        for (var i = 0; i < 42; i++) {
            dataTable.push({ price: i + 0.56 });
        }
        this.data = dataTable;
    }
    return ColumnComponent;
}());
ColumnComponent = __decorate([
    core_1.Component({
        templateUrl: './app-column.component.html'
    }),
    __metadata("design:paramtypes", [])
], ColumnComponent);
exports.ColumnComponent = ColumnComponent;
//# sourceMappingURL=app-column.component.js.map