"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Name = function (_a) {
    var name = _a.name, company = _a.company, experience = _a.experience;
    return (react_1.default.createElement("div", { style: { padding: '20px', border: '1px solid red' } },
        react_1.default.createElement("h1", null,
            "My Name is ",
            name),
        react_1.default.createElement("h2", null,
            "Company is: ",
            company,
            " "),
        experience && react_1.default.createElement("h3", null,
            "Experience is ",
            experience,
            " ")));
};
exports.default = Name;
