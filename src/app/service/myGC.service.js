"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
// import {$} from 'jquery'
var img = document.createElement('img');
img.src = '../../img/plus.png';
var MyCellType = (function (_super) {
    __extends(MyCellType, _super);
    function MyCellType() {
        var _this = _super.call(this) || this;
        _this.fillStyle = '#555';
        _this.strokeStyle = '#666';
        _this.padding = [2, 5];
        _this.circleOuterPadding = 1;
        _this.picW = 23;
        _this.picH = 14;
        _this.img = img;
        return _this;
    }
    MyCellType.prototype.paint = function (ctx, value, x, y, w, h, style, context) {
        if (!ctx)
            return;
        var p = this.padding;
        this.x = x + p[1];
        this.y = y + p[0];
        this.w = w - p[1] * 2;
        this.h = h - p[0] * 2;
        ctx.save();
        ctx.fillStyle = this.fillStyle;
        ctx.strokeStyle = this.strokeStyle;
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.clip();
        //code..
        ctx.strokeRect(this.x, this.y, this.w, this.h);
        ctx.drawImage(this.img, this.x + this.w - this.picW, this.y + this.circleOuterPadding);
        ctx.closePath();
        ctx.restore();
    };
    MyCellType.prototype.getHitInfo = function (x, y, cellStyle, cellRect, context) {
        var ltx = cellRect.x + cellRect.width - this.picW - this.padding[1];
        var lty = cellRect.y;
        var rtx = cellRect.x + cellRect.width;
        var lby = cellRect.y + cellRect.height;
        var info = {
            x: x,
            y: y,
            row: context.row,
            col: context.col,
            cellRect: cellRect,
            sheetArea: context.sheetArea
        };
        if (x >= ltx && x <= rtx && y >= lty && y <= lby) {
            info['isReservedLocation'] = true;
        }
        return info;
    };
    MyCellType.prototype.processMouseUp = function (hitInfo) {
        var sheet = hitInfo.sheet;
        if (sheet && hitInfo.isReservedLocation) {
            return true;
        }
        return false;
    };
    MyCellType.prototype.createEditorElement = function () {
        var divE = document.createElement('div');
        console.log($);
        var div = $(divE);
        div.css('background', 'red');
        div.css('overflow', 'hidden');
        div.style.background = 'red';
        div.append($('<input type="text"/>'));
        return divE;
    };
    return MyCellType;
}(GC.Spread.Sheets.CellTypes.Base));
MyCellType = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], MyCellType);
exports.MyCellType = MyCellType;
//# sourceMappingURL=myGC.service.js.map