#!/usr/bin/env node
"use strict";
exports.__esModule = true;
var chalk_1 = require("chalk");
var program = require("commander");
var format_1 = require("./format");
program.description("\n  Organise package.json files according to a conventional format, where fields\n  appear in a predictable order and nested fields are ordered alphabetically.\n  Shorthand properties are used where available, such as the \"repository\" and\n  \"bugs\" fields.".replace(/^\n/, ''));
program.on('--help', function () {
    console.log('');
    console.log("Examples:\n  " + chalk_1["default"].grey('# uses packages defined in lerna.json by default') + "\n  syncpack format\n  " + chalk_1["default"].grey('# uses packages defined by --source when provided') + "\n  syncpack format --source " + chalk_1["default"].yellow('"apps/*/package.json"') + "\n  " + chalk_1["default"].grey('# multiple globs can be provided like this') + "\n  syncpack format --source " + chalk_1["default"].yellow('"apps/*/package.json"') + " --source " + chalk_1["default"].yellow('"core/*/package.json"') + "\n  " + chalk_1["default"].grey('# indent package.json with 4 spaces instead of 2') + "\n  syncpack format --indent " + chalk_1["default"].yellow('"    "') + "\n  ");
    console.log("Reference:\n  lerna.json\n  " + chalk_1["default"].blue.underline('https://github.com/lerna/lerna#lernajson') + "\n  globs\n  " + chalk_1["default"].blue.underline('https://github.com/isaacs/node-glob#glob-primer'));
});
format_1.run(program);
