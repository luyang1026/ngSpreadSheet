"use strict";
var myGC_service_1 = require("./myGC.service");
var CustomTagRenderer = (function () {
    function CustomTagRenderer(spreadInstance, json, sheetName) {
        if (sheetName === void 0) { sheetName = 'Sheet1'; }
        this.json = json;
        this.sheets = json.sheets || {};
        this.activeSheet = this.sheets[sheetName] || {};
        this.data = this.activeSheet.data.dataTable;
        this.spreadInstance = spreadInstance;
        this.sheetInstance = this.spreadInstance.getActiveSheet();
        this.init();
    }
    CustomTagRenderer.prototype.init = function () {
        this.spreadInstance.suspendPaint();
        this.cellsIterator();
        this.spreadInstance.resumePaint();
    };
    CustomTagRenderer.prototype.cellsIterator = function () {
        for (var _i = 0, _a = Object.keys(this.data); _i < _a.length; _i++) {
            var row = _a[_i];
            for (var _b = 0, _c = Object.keys(this.data[row]); _b < _c.length; _b++) {
                var col = _c[_b];
                if (this.sheetInstance.getTag(row, col)) {
                    var tagInfo = JSON.parse(this.sheetInstance.getTag(row, col));
                    if (tagInfo.elementType) {
                        this.addCustomCellType(tagInfo.elementType, +row, +col);
                    }
                }
            }
        }
    };
    CustomTagRenderer.prototype.addCustomCellType = function (elementType, row, col) {
        var _this = this;
        var celltype = new myGC_service_1.CustomCellType(elementType);
        this.sheetInstance.getCell(row, col).cellType(celltype);
        celltype.on(function (clickInfo) {
            _this.customCellClickCallback(clickInfo);
        });
    };
    CustomTagRenderer.prototype.addListener = function (eventName, callback) {
        if (eventName === void 0) { eventName = 'customCellClick'; }
        switch (eventName) {
            case 'customCellClick':
                this.customCellClickCallback = callback;
                break;
            default:
                this.customCellClickCallback = callback;
                break;
        }
    };
    return CustomTagRenderer;
}());
exports.CustomTagRenderer = CustomTagRenderer;
//# sourceMappingURL=costomRenderer.service.js.map