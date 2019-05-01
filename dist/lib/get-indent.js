"use strict";
exports.__esModule = true;
var constants_1 = require("../constants");
exports.getIndent = function (program) {
    return program.indent || constants_1.OPTION_INDENT["default"];
};
