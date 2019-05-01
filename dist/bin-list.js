#!/usr/bin/env node
"use strict";
exports.__esModule = true;
var chalk_1 = require("chalk");
var program = require("commander");
var list_1 = require("./list");
program.description("\n  List all dependencies required by your packages.".replace(/^\n/, ''));
program.on('--help', function () {
    console.log('');
    console.log("Examples:\n  " + chalk_1["default"].grey('# uses packages defined in lerna.json by default') + "\n  syncpack list\n  " + chalk_1["default"].grey('# uses packages defined by --source when provided') + "\n  syncpack list --source " + chalk_1["default"].yellow('"apps/*/package.json"') + "\n  " + chalk_1["default"].grey('# uses dependencies regular expression defined by --filter when provided') + "\n  syncpack list --filter " + chalk_1["default"].yellow('"typescript|tslint"') + "\n  " + chalk_1["default"].grey('# multiple globs can be provided like this') + "\n  syncpack list --source " + chalk_1["default"].yellow('"apps/*/package.json"') + " --source " + chalk_1["default"].yellow('"core/*/package.json"') + "\n  " + chalk_1["default"].grey('# only inspect "devDependencies"') + "\n  syncpack list --dev\n  " + chalk_1["default"].grey('# only inspect "devDependencies" and "peerDependencies"') + "\n  syncpack list --dev --peer\n  ");
    console.log("Reference:\n  lerna.json\n  " + chalk_1["default"].blue.underline('https://github.com/lerna/lerna#lernajson') + "\n  globs\n  " + chalk_1["default"].blue.underline('https://github.com/isaacs/node-glob#glob-primer'));
});
list_1.run(program);
