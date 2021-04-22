"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(require("styled-components"));
var react_1 = __importDefault(require("react"));
var Button = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: transparent;\n  border-radius: 3px;\n  border: 2px solid palevioletred;\n  color: palevioletred;\n  margin: 0 1em;\n  padding: 0.25em 1em;\n"], ["\n  background: transparent;\n  border-radius: 3px;\n  border: 2px solid palevioletred;\n  color: palevioletred;\n  margin: 0 1em;\n  padding: 0.25em 1em;\n"])));
var StyledButton = function (_a) {
    var onStyledButtonClick = _a.onStyledButtonClick;
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h1", null, "I'm a styled button"),
        react_1.default.createElement(Button, { onClick: onStyledButtonClick }, "I'm a styled button")));
};
exports.default = StyledButton;
var templateObject_1;
