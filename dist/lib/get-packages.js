"use strict";
exports.__esModule = true;
var fs_extra_1 = require("fs-extra");
var globby = require("globby");
var path_1 = require("path");
var constants_1 = require("../constants");
exports.getSources = function (program) {
    if (program.source && program.source.length) {
        return program.source;
    }
    var lernaPath = path_1.resolve(process.cwd(), 'lerna.json');
    var lerna = fs_extra_1.readJsonSync(lernaPath, { throws: false });
    if (lerna && lerna.packages && lerna.packages.length) {
        return lerna.packages.map(function (glob) { return path_1.join(glob, 'package.json'); });
    }
    return constants_1.OPTION_SOURCES["default"];
};
exports.getPackages = function (program) {
    return globby.sync(exports.getSources(program)).map(function (filePath) { return ({
        data: fs_extra_1.readJsonSync(filePath),
        path: filePath
    }); });
};
