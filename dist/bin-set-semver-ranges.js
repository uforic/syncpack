#!/usr/bin/env node
"use strict";
exports.__esModule = true;
var chalk_1 = require("chalk");
var program = require("commander");
var set_semver_ranges_1 = require("./set-semver-ranges");
program.description("\n  Ensure dependency versions used within \"dependencies\", \"devDependencies\", and\n  \"peerDependencies\" follow a consistent format.".replace(/^\n/, ''));
program.on('--help', function () {
    console.log('');
    console.log("Examples:\n  " + chalk_1["default"].grey('# uses packages defined in lerna.json by default') + "\n  syncpack set-semver-ranges\n  " + chalk_1["default"].grey('# uses packages defined by --source when provided') + "\n  syncpack set-semver-ranges --source " + chalk_1["default"].yellow('"apps/*/package.json"') + "\n  " + chalk_1["default"].grey('# multiple globs can be provided like this') + "\n  syncpack set-semver-ranges --source " + chalk_1["default"].yellow('"apps/*/package.json"') + " --source " + chalk_1["default"].yellow('"core/*/package.json"') + "\n  " + chalk_1["default"].grey('# use ~ range instead of default ""') + "\n  syncpack set-semver-ranges --semver-range ~\n  " + chalk_1["default"].grey('# set ~ range in "devDependencies"') + "\n  syncpack set-semver-ranges --dev --semver-range ~\n  " + chalk_1["default"].grey('# set ~ range in "devDependencies" and "peerDependencies"') + "\n  syncpack set-semver-ranges --dev --peer --semver-range ~\n  " + chalk_1["default"].grey('# indent package.json with 4 spaces instead of 2') + "\n  syncpack set-semver-ranges --indent " + chalk_1["default"].yellow('"    "') + "\n  ");
    console.log("Supported Ranges:\n  <  " + chalk_1["default"].grey('<1.4.2') + "\n  <= " + chalk_1["default"].grey('<=1.4.2') + "\n  \"\" " + chalk_1["default"].grey('1.4.2') + "\n  ~  " + chalk_1["default"].grey('~1.4.2') + "\n  ^  " + chalk_1["default"].grey('^1.4.2') + "\n  >= " + chalk_1["default"].grey('>=1.4.2') + "\n  >  " + chalk_1["default"].grey('>1.4.2') + "\n  *  " + chalk_1["default"].grey('*') + "\n  ");
    console.log("Reference:\n  lerna.json\n  " + chalk_1["default"].blue.underline('https://github.com/lerna/lerna#lernajson') + "\n  globs\n  " + chalk_1["default"].blue.underline('https://github.com/isaacs/node-glob#glob-primer'));
});
set_semver_ranges_1.run(program);
