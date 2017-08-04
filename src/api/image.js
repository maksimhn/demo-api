import { Router } from "express";
import * as path from 'path';
import multer from 'multer';
import * as rimraf from 'rimraf';
import { mkdirSync, existsSync } from 'fs';
const uploadsDir = path.resolve(__dirname, 'uploads');

export default ({ config, db }) => {
    if (!existsSync(uploadsDir)) {
        mkdirSync(uploadsDir);
    }

    let storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, uploadsDir);
        },
        filename: (req, file, cb) => {
            let ext = path.extname(file.originalname);
            cb(null, `${Math.random().toString(36).substring(7)}${ext}`);
        }
    });

    let upload = multer({ storage: storage });
    let api = Router();

    api.post('/upload', upload.any(), (req, res) => {
        res.status(200);
		deleteAllFiles();
    });

    function deleteAllFiles() {
        rimraf.sync(`${uploadsDir}/**/*`);
    }

    return api;
}