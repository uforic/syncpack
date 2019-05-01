"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var constants_1 = require("./constants");
var collect_1 = require("./lib/collect");
var get_indent_1 = require("./lib/get-indent");
var get_packages_1 = require("./lib/get-packages");
exports.run = function (program) { return __awaiter(_this, void 0, void 0, function () {
    var shortenBugs, shortenRepository, sortObject, sortValue, sortManifest, pkgs, indent;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                shortenBugs = function (manifest) {
                    var bugsUrl = _.get(manifest, 'bugs.url');
                    return bugsUrl ? __assign({}, manifest, { bugs: bugsUrl }) : manifest;
                };
                shortenRepository = function (manifest) {
                    var repoUrl = _.get(manifest, 'repository.url', '');
                    return repoUrl.includes('github.com')
                        ? __assign({}, manifest, { repository: repoUrl.split('github.com/')[1] }) : manifest;
                };
                sortObject = function (obj) {
                    return _(obj)
                        .entries()
                        .sortBy('0')
                        .reduce(function (next, _a) {
                        var key = _a[0], value = _a[1];
                        var _b;
                        return (__assign({}, next, (_b = {}, _b[key] = value, _b)));
                    }, {});
                };
                sortValue = function (value) {
                    return _.isArray(value)
                        ? value.slice(0).sort()
                        : _.isObject(value)
                            ? sortObject(value)
                            : value;
                };
                sortManifest = function (manifest) {
                    var _a = _(manifest)
                        .entries()
                        .sortBy('0')
                        .partition(function (_a) {
                        var key = _a[0], value = _a[1];
                        return constants_1.SORT_FIRST.indexOf(key) !== -1;
                    })
                        .value(), first = _a[0], rest = _a[1];
                    var firstSorted = first.slice().sort(function (_a, _b) {
                        var keyA = _a[0];
                        var keyB = _b[0];
                        return constants_1.SORT_FIRST.indexOf(keyA) - constants_1.SORT_FIRST.indexOf(keyB);
                    });
                    var restSorted = _(rest)
                        .map(function (_a) {
                        var key = _a[0], value = _a[1];
                        return [
                            key,
                            constants_1.SORT_AZ.indexOf(key) !== -1 ? sortValue(value) : value
                        ];
                    })
                        .value();
                    return _(firstSorted.concat(restSorted)).reduce(function (obj, _a) {
                        var key = _a[0], value = _a[1];
                        var _b;
                        return (__assign({}, obj, (_b = {}, _b[key] = value, _b)));
                    }, {});
                };
                program
                    .option(constants_1.OPTION_SOURCES.spec, constants_1.OPTION_SOURCES.description, collect_1.collect)
                    .option(constants_1.OPTION_INDENT.spec, constants_1.OPTION_INDENT.description)
                    .parse(process.argv);
                pkgs = get_packages_1.getPackages(program);
                indent = get_indent_1.getIndent(program);
                return [4 /*yield*/, Promise.all(pkgs.map(function (_a) {
                        var data = _a.data, path = _a.path;
                        var nextData = sortManifest(shortenBugs(shortenRepository(data)));
                        var hasChanged = JSON.stringify(nextData) !== JSON.stringify(data);
                        var shortPath = "./" + path_1.relative('.', path);
                        if (hasChanged) {
                            console.log(chalk_1["default"].bgYellow.black(' FIXED '), chalk_1["default"].blue(shortPath));
                            return fs_extra_1.writeJson(path, nextData, { spaces: indent });
                        }
                        console.log(chalk_1["default"].bgGreen.black(' VALID '), chalk_1["default"].blue(shortPath));
                    }))];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
