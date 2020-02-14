"use strict";

/**
 * Importing controllers
 */
const index = require("app/controllers/index");

module.exports = function (app) {
// Home route
    app.get("/", index.home);
};