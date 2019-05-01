"use strict";
exports.__esModule = true;
var constants_1 = require("./constants");
exports.run = function (program) {
    program
        .version(constants_1.VERSION)
        .command(constants_1.FIX_MISMATCHES.command, constants_1.FIX_MISMATCHES.description)
        .command(constants_1.FORMAT.command, constants_1.FORMAT.description)
        .command(constants_1.LIST.command, constants_1.LIST.description, { isDefault: true })
        .command(constants_1.LIST_MISMATCHES.command, constants_1.LIST_MISMATCHES.description)
        .command(constants_1.SET_SEMVER_RANGES.command, constants_1.SET_SEMVER_RANGES.description);
    program.parse(process.argv);
};
