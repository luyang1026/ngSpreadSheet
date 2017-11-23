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
var Pane = (function () {
    function Pane() {
    }
    return Pane;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], Pane.prototype, "id", void 0);
Pane = __decorate([
    core_1.Directive({ selector: 'pane' })
], Pane);
exports.Pane = Pane;
var ViewChildComp = (function () {
    function ViewChildComp() {
        this.selectedPane = '';
        this.shouldShow = true;
    }
    Object.defineProperty(ViewChildComp.prototype, "pane", {
        set: function (v) {
            var _this = this;
            setTimeout(function () { _this.selectedPane = v.id; }, 0);
        },
        enumerable: true,
        configurable: true
    });
    ViewChildComp.prototype.toggle = function () { this.shouldShow = !this.shouldShow; };
    return ViewChildComp;
}());
__decorate([
    core_1.ViewChild(Pane),
    __metadata("design:type", Pane),
    __metadata("design:paramtypes", [Pane])
], ViewChildComp.prototype, "pane", null);
ViewChildComp = __decorate([
    core_1.Component({
        selector: 'example-app',
        template: "\n   <pane id=\"1\" *ngIf=\"shouldShow\"></pane>\n   <pane id=\"2\" *ngIf=\"!shouldShow\"></pane>\n   \n   <button (click)=\"toggle()\">Toggle</button>\n      \n   <div>Selected: {{selectedPane}}</div> \n ",
    })
], ViewChildComp);
exports.ViewChildComp = ViewChildComp;
//# sourceMappingURL=app-reportone.component.js.map