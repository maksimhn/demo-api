import { Router } from "express";
import path from 'path';
import multer from 'multer';
import rimraf from 'rimraf';
import fs from 'fs';
import imageProcessing from '../features/image/imageProcessing';

const uploadsDir = path.resolve(__dirname, 'uploads');

function image({ config, db }) {
	if (!fs.existsSync(uploadsDir)) {
		fs.mkdirSync(uploadsDir);
	}

	let storage = multer.diskStorage({
		destination: (req, file, cb) => {
			cb(null, uploadsDir);
		},
		filename: (req, file, cb) => {
			cb(null, file.originalname);
		}
	});

	let upload = multer({ storage: storage });
	let api = Router();

	api.post('/upload', upload.any(), (req, res) => {
		let images = fs.readdirSync(uploadsDir);
		let editPromises = [];
		const tempDir = path.resolve(__dirname, req.body.clientId);

		if (!fs.existsSync(tempDir)) {
			fs.mkdirSync(tempDir);
		}

		images.map(fileName => {
			let processingPromise = imageProcessing(uploadsDir, fileName, tempDir);
			editPromises.push(processingPromise);
		});

		Promise.all(editPromises)
			.then((result) => {
				res.sendStatus(200);
				deleteAllFiles();
			})
			.catch(err => {
				console.log('error is: ', err);
			});
	});

	api.get('/download/:clientId/:imageName', (req, res) => {
		res.sendFile(`${req.params.clientId}/${req.params.imageName}`, { root: __dirname });
	});

	api.post('/archive', (req, res) => {
		console.log('req!');
	});

	function deleteAllFiles() {
		rimraf.sync(`${uploadsDir}/**/*`);
	}

	return api;
}

module.exports = image;