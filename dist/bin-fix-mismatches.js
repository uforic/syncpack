#!/usr/bin/env node
"use strict";
exports.__esModule = true;
var chalk_1 = require("chalk");
var program = require("commander");
var fix_mismatches_1 = require("./fix-mismatches");
program.description("\n  Ensure that multiple packages requiring the same dependency define the same\n  version, so that every package requires eg. react@16.4.2, instead of a\n  combination of react@16.4.2, react@0.15.9, and react@16.0.0.".replace(/^\n/, ''));
program.on('--help', function () {
    console.log('');
    console.log("Examples:\n  " + chalk_1["default"].grey('# uses packages defined in lerna.json by default') + "\n  syncpack fix-mismatches\n  " + chalk_1["default"].grey('# uses packages defined by --source when provided') + "\n  syncpack fix-mismatches --source " + chalk_1["default"].yellow('"apps/*/package.json"') + "\n  " + chalk_1["default"].grey('# uses dependencies regular expression defined by --filter when provided') + "\n  syncpack fix-mismatches --filter " + chalk_1["default"].yellow('"typescript|tslint"') + "\n  " + chalk_1["default"].grey('# multiple globs can be provided like this') + "\n  syncpack fix-mismatches --source " + chalk_1["default"].yellow('"apps/*/package.json"') + " --source " + chalk_1["default"].yellow('"core/*/package.json"') + "\n  " + chalk_1["default"].grey('# only fix "devDependencies"') + "\n  syncpack fix-mismatches --dev\n  " + chalk_1["default"].grey('# only fix "devDependencies" and "peerDependencies"') + "\n  syncpack fix-mismatches --dev --peer\n  " + chalk_1["default"].grey('# indent package.json with 4 spaces instead of 2') + "\n  syncpack fix-mismatches --indent " + chalk_1["default"].yellow('"    "') + "\n  ");
    console.log("Reference:\n  lerna.json\n  " + chalk_1["default"].blue.underline('https://github.com/lerna/lerna#lernajson') + "\n  globs\n  " + chalk_1["default"].blue.underline('https://github.com/isaacs/node-glob#glob-primer'));
});
fix_mismatches_1.run(program);
