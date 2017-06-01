'use strict';

Object.defineProperty(exports, "__esModule", {
			value: true
});

var _package = require('../../package.json');

var _express = require('express');

var _facets = require('./facets');

var _facets2 = _interopRequireDefault(_facets);

var _bot = require('./bot');

var _bot2 = _interopRequireDefault(_bot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
			var config = _ref.config,
			    db = _ref.db;

			// export default (req, res, next) => {
			var api = (0, _express.Router)();

			// mount the facets resource
			// api.use('/facets', facets({ config, db }));

			// api.use('/', api({ config, db }));

			// api.use('/bot', bot({config, db}));

			// perhaps expose some API metadata at the root
			// api.get('/', (req, res) => {
			// 	res.json({ pika: "pika" });
			// });

			api.get('/api', function (req, res, next) {
						console.log('hi from api router');
			});

			return api;
};
//# sourceMappingURL=index.js.map