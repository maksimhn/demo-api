'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _package = require('../../package.json');

var _express = require('express');

var _bot = require('./bot');

var _bot2 = _interopRequireDefault(_bot);

var _tracks = require('./tracks');

var _tracks2 = _interopRequireDefault(_tracks);

var _image = require('./image');

var _image2 = _interopRequireDefault(_image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var config = _ref.config,
        db = _ref.db;

    var api = (0, _express.Router)();

    api.use('/bot', (0, _bot2.default)({ config: config, db: db }));

    api.use('/music', (0, _tracks2.default)({ config: config, db: db }));

    api.use('/image', (0, _image2.default)({ config: config, db: db }));

    return api;
};
//# sourceMappingURL=index.js.map