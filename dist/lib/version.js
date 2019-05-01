"use strict";
exports.__esModule = true;
var semver = require("semver");
var constants_1 = require("../constants");
var isSemver = function (version) {
    return version === '*' ||
        version.search(/^(<|<=|~|\^|>=|>)?([0-9]+|x)\.([0-9]+|x)\.([0-9]+|x)/) !== -1;
};
exports.getNewest = function (versions) {
    var sorted = exports.sortBySemver(versions);
    return sorted[sorted.length - 1];
};
exports.getVersionNumber = function (version) {
    return version.slice(version.search(/[0-9]/), version.length);
};
exports.getVersionRange = function (version) {
    if (isSemver(version)) {
        return version.includes('.x') ? '.x' : version.split(/[0-9]/)[0];
    }
    return '';
};
exports.sortBySemver = function (versions) {
    return versions
        .concat()
        .filter(isSemver)
        .sort()
        .sort(function (a, b) {
        if (a === '*') {
            return constants_1.GREATER;
        }
        if (b === '*') {
            return constants_1.LESSER;
        }
        if (a === b) {
            return constants_1.SAME;
        }
        var aRange = exports.getVersionRange(a);
        var bRange = exports.getVersionRange(b);
        var aNumber = exports.getVersionNumber(a);
        var bNumber = exports.getVersionNumber(b);
        if (aNumber.indexOf('.x') !== -1) {
            aNumber = aNumber.split('.x').join('.0');
            aRange = '^';
        }
        if (bNumber.indexOf('.x') !== -1) {
            bNumber = bNumber.split('.x').join('.0');
            bRange = '^';
        }
        if (semver.gt(aNumber, bNumber)) {
            return constants_1.GREATER;
        }
        if (semver.lt(aNumber, bNumber)) {
            return constants_1.LESSER;
        }
        if (constants_1.SEMVER_ORDER.indexOf(aRange) > constants_1.SEMVER_ORDER.indexOf(bRange)) {
            return constants_1.GREATER;
        }
        if (constants_1.SEMVER_ORDER.indexOf(aRange) < constants_1.SEMVER_ORDER.indexOf(bRange)) {
            return constants_1.LESSER;
        }
        return constants_1.SAME;
    });
};
