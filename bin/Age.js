"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Age = function (_a) {
    var age = _a.age, dob = _a.dob;
    return (react_1.default.createElement("div", { style: { padding: '20px', border: '1px solid blue' } },
        react_1.default.createElement("h1", null,
            "My Age is ",
            age),
        react_1.default.createElement("h2", null,
            "DOB is : ",
            dob)));
};
exports.default = Age;
