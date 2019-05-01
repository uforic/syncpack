"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
exports.__esModule = true;
var chalk_1 = require("chalk");
var fs_extra_1 = require("fs-extra");
var _ = require("lodash");
var path_1 = require("path");
var semver = require("semver");
var constants_1 = require("./constants");
var collect_1 = require("./lib/collect");
var get_dependency_types_1 = require("./lib/get-dependency-types");
var get_indent_1 = require("./lib/get-indent");
var get_packages_1 = require("./lib/get-packages");
var get_versions_by_name_1 = require("./lib/get-versions-by-name");
var version_1 = require("./lib/version");
exports.run = function (program) { return __awaiter(_this, void 0, void 0, function () {
    var semverRange, pkgs, dependencyTypes, indent, dependencyFilter;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                program
                    .option(constants_1.OPTION_SEMVER_RANGE.spec, constants_1.OPTION_SEMVER_RANGE.description)
                    .option(constants_1.OPTION_SOURCES.spec, constants_1.OPTION_SOURCES.description, collect_1.collect)
                    .option(constants_1.OPTIONS_PROD.spec, constants_1.OPTIONS_PROD.description)
                    .option(constants_1.OPTIONS_DEV.spec, constants_1.OPTIONS_DEV.description)
                    .option(constants_1.OPTIONS_PEER.spec, constants_1.OPTIONS_PEER.description)
                    .option(constants_1.OPTIONS_FILTER_DEPENDENCIES.spec, constants_1.OPTIONS_FILTER_DEPENDENCIES.description)
                    .option(constants_1.OPTION_INDENT.spec, constants_1.OPTION_INDENT.description)
                    .parse(process.argv);
                semverRange = program.semverRange || constants_1.OPTION_SEMVER_RANGE["default"];
                pkgs = get_packages_1.getPackages(program);
                dependencyTypes = get_dependency_types_1.getDependencyTypes(program);
                indent = get_indent_1.getIndent(program);
                dependencyFilter = get_versions_by_name_1.getDependencyFilter(program.filter);
                _(pkgs).each(function (pkg) {
                    return _(dependencyTypes)
                        .map(function (property) { return pkg.data[property]; })
                        .filter(Boolean)
                        .each(function (dependencies) {
                        _(dependencies).each(function (version, name) {
                            if (!dependencyFilter(name)) {
                                return;
                            }
                            var versionNumber = version_1.getVersionNumber(version)
                                .split('.x')
                                .join('.0');
                            if (version !== '*' && semver.validRange(version)) {
                                if (semverRange === constants_1.RANGE_ANY) {
                                    dependencies[name] = '*';
                                }
                                else if (semverRange === constants_1.RANGE_LOOSE) {
                                    dependencies[name] =
                                        semver.major(versionNumber) === 0
                                            ? semver.major(versionNumber) + "." + semver.minor(versionNumber) + ".x"
                                            : semver.major(versionNumber) + ".x.x";
                                }
                                else {
                                    dependencies[name] = "" + semverRange + versionNumber;
                                }
                            }
                        });
                    });
                });
                return [4 /*yield*/, Promise.all(pkgs.map(function (_a) {
                        var data = _a.data, path = _a.path;
                        return fs_extra_1.writeJson(path, data, { spaces: indent });
                    }))];
            case 1:
                _a.sent();
                _.each(pkgs, function (pkg) {
                    console.log(chalk_1["default"].blue("./" + path_1.relative('.', pkg.path)));
                });
                return [2 /*return*/];
        }
    });
}); };
