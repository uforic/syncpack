"use strict";
exports.__esModule = true;
exports.getDependencyFilter = function (dependencyFilterPattern) {
    if (!dependencyFilterPattern) {
        return function () { return true; };
    }
    var dependencyMatcher = new RegExp(dependencyFilterPattern);
    return function (dependencyName) { return dependencyMatcher.test(dependencyName); };
};
exports.getVersionsByName = function (dependencyTypes, pkgs, dependencyFilterPattern) {
    var dependencyFilter = exports.getDependencyFilter(dependencyFilterPattern);
    var versionsByName = {};
    for (var _i = 0, dependencyTypes_1 = dependencyTypes; _i < dependencyTypes_1.length; _i++) {
        var type = dependencyTypes_1[_i];
        for (var _a = 0, pkgs_1 = pkgs; _a < pkgs_1.length; _a++) {
            var pkg = pkgs_1[_a];
            var dependencies = pkg.data[type];
            if (dependencies) {
                for (var name in dependencies) {
                    if (!dependencyFilter(name)) {
                        continue;
                    }
                    if (dependencies.hasOwnProperty(name)) {
                        var version = dependencies[name];
                        versionsByName[name] = versionsByName[name] || [];
                        if (!versionsByName[name].includes(version)) {
                            versionsByName[name].push(version);
                        }
                    }
                }
            }
        }
    }
    return versionsByName;
};
exports.getMismatchedVersionsByName = function (dependencyTypes, pkgs, dependencyFilterPattern) {
    var dependencyFilter = exports.getDependencyFilter(dependencyFilterPattern);
    var mismatchedVersionsByName = {};
    var versionsByName = exports.getVersionsByName(dependencyTypes, pkgs, dependencyFilterPattern);
    for (var _i = 0, dependencyTypes_2 = dependencyTypes; _i < dependencyTypes_2.length; _i++) {
        var type = dependencyTypes_2[_i];
        for (var _a = 0, pkgs_2 = pkgs; _a < pkgs_2.length; _a++) {
            var pkg = pkgs_2[_a];
            var dependencies = pkg.data[type];
            if (dependencies) {
                for (var name in dependencies) {
                    if (!dependencyFilter(name)) {
                        continue;
                    }
                    if (dependencies.hasOwnProperty(name)) {
                        if (versionsByName[name].length > 1) {
                            mismatchedVersionsByName[name] = versionsByName[name];
                        }
                    }
                }
            }
        }
    }
    return mismatchedVersionsByName;
};
