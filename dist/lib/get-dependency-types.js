"use strict";
exports.__esModule = true;
var constants_1 = require("../constants");
exports.getDependencyTypes = function (program) {
    return program.prod || program.dev || program.peer
        ? constants_1.DEPENDENCY_TYPES.filter(function (type) {
            return (type === 'dependencies' && program.prod) ||
                (type === 'devDependencies' && program.dev) ||
                (type === 'peerDependencies' && program.peer);
        })
        : constants_1.DEPENDENCY_TYPES;
};
