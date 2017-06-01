'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _package = require('../../package.json');

var _express = require('express');

var _bot = require('../models/bot');

var _bot2 = _interopRequireDefault(_bot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var config = _ref.config,
        db = _ref.db;

    var api = (0, _express.Router)();

    // api.use('/bot', bot({ config, db }));

    // perhaps expose some API metadata at the root
    api.get('/greeting', function (req, res) {
        console.log("hm");
        res.json({ version: _package.version });
    });

    return api;
};
//# sourceMappingURL=bot.js.map