"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.myName = void 0;
var express_1 = __importDefault(require("express"));
console.log(express_1.default);
var app = (0, express_1.default)();
app.listen(function () {
    console.log("listening");
});
exports.myName = "gordon";
// Default Export
function myDefaultFunction() {
    return "My Default Function";
}
exports.default = myDefaultFunction;
//# sourceMappingURL=06-express.js.map