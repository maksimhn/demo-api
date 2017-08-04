'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _package = require('../../package.json');

var _express = require('express');

var _index = require('../features/bot/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import botActions from "index.js";

exports.default = function (_ref) {
    var config = _ref.config,
        db = _ref.db;

    var api = (0, _express.Router)();

    api.get('/greeting', function (req, res) {
        // console.log(botActions);
        _index2.default.greetings(req, res);
    });

    api.post('/q', function (req, res) {
        res.send('Response to Q');
    });

    api.delete('/clear', function (req, res) {});

    return api;
};
// import bot from "../models/bot";
//# sourceMappingURL=bot.js.map