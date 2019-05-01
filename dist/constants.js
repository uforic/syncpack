"use strict";
exports.__esModule = true;
exports.DEPENDENCY_TYPES = [
    'dependencies',
    'devDependencies',
    'peerDependencies'
];
exports.SORT_AZ = [
    'contributors',
    'dependencies',
    'devDependencies',
    'files',
    'keywords',
    'peerDependencies',
    'scripts'
];
exports.SORT_FIRST = ['name', 'description', 'version', 'author'];
exports.VERSION = require('../package.json').version;
exports.GREATER = 1;
exports.LESSER = -1;
exports.SAME = 0;
exports.RANGE_ANY = '*';
exports.RANGE_EXACT = '';
exports.RANGE_GT = '>';
exports.RANGE_GTE = '>=';
exports.RANGE_LOOSE = '.x';
exports.RANGE_LT = '<';
exports.RANGE_LTE = '<=';
exports.RANGE_MINOR = '^';
exports.RANGE_PATCH = '~';
exports.SEMVER_ORDER = [
    exports.RANGE_LT,
    exports.RANGE_LTE,
    exports.RANGE_EXACT,
    exports.RANGE_PATCH,
    exports.RANGE_MINOR,
    exports.RANGE_GTE,
    exports.RANGE_GT,
    exports.RANGE_ANY
];
var DEFAULT_INDENT = '  ';
var DEFAULT_SEMVER_RANGE = exports.RANGE_EXACT;
var MONOREPO_PATTERN = 'package.json';
var PACKAGES_PATTERN = 'packages/*/package.json';
var ALL_PATTERNS = [MONOREPO_PATTERN, PACKAGES_PATTERN];
exports.FIX_MISMATCHES = {
    command: 'fix-mismatches',
    description: 'set dependencies used with different versions to the same version'
};
exports.FORMAT = {
    command: 'format',
    description: 'sort and shorten properties according to a convention'
};
exports.LIST = {
    command: 'list',
    description: 'list every dependency used in your packages'
};
exports.LIST_MISMATCHES = {
    command: 'list-mismatches',
    description: 'list every dependency used with different versions in your packages'
};
exports.SET_SEMVER_RANGES = {
    command: 'set-semver-ranges',
    description: 'set semver ranges to the given format'
};
exports.OPTION_SEMVER_RANGE = {
    "default": DEFAULT_SEMVER_RANGE,
    description: exports.RANGE_LT + ", " + exports.RANGE_LTE + ", \"" + exports.RANGE_EXACT + "\", " + exports.RANGE_PATCH + ", " + exports.RANGE_MINOR + ", " +
        (exports.RANGE_GTE + ", " + exports.RANGE_GT + ", or " + exports.RANGE_ANY + ". defaults to \"" + DEFAULT_SEMVER_RANGE + "\""),
    spec: '-r, --semver-range <range>'
};
exports.OPTION_SOURCES = {
    "default": ALL_PATTERNS,
    description: 'glob pattern for package.json files to read from',
    spec: '-s, --source [pattern]'
};
exports.OPTIONS_PROD = {
    description: 'include dependencies',
    spec: '-p, --prod'
};
exports.OPTIONS_DEV = {
    description: 'include devDependencies',
    spec: '-d, --dev'
};
exports.OPTIONS_PEER = {
    description: 'include peerDependencies',
    spec: '-P, --peer'
};
exports.OPTIONS_FILTER_DEPENDENCIES = {
    description: 'regex for depdendency filter',
    spec: '-f, --filter [pattern]'
};
exports.OPTION_INDENT = {
    "default": DEFAULT_INDENT,
    description: "override indentation. defaults to \"" + DEFAULT_INDENT + "\"",
    spec: '-i, --indent [value]'
};
