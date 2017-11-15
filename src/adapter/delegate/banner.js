"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Banner = /** @class */ (function () {
    function Banner(text) {
        this.text = text;
    }
    Banner.prototype.showWithParen = function () {
        console.log("(" + this.text + ")");
    };
    Banner.prototype.showWithAster = function () {
        console.log("*" + this.text + "*");
    };
    return Banner;
}());
var Print = /** @class */ (function () {
    function Print() {
    }
    return Print;
}());
var PrintBanner = /** @class */ (function (_super) {
    __extends(PrintBanner, _super);
    function PrintBanner(text) {
        var _this = _super.call(this) || this;
        _this.banner = new Banner(text);
        return _this;
    }
    PrintBanner.prototype.printWeak = function () {
        this.banner.showWithParen();
    };
    PrintBanner.prototype.printStrong = function () {
        this.banner.showWithAster();
    };
    return PrintBanner;
}(Print));
exports.PrintBanner = PrintBanner;
