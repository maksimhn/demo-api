import { version } from '../../package.json';
import { Router } from "express";
import env from 'node-env-file';
import * as s3 from "s3";

env('./.env');

export default ({ config, db }) => {
    let api = Router();
    let s3Client = s3.createClient({
        s3Options: {
            accessKeyId: process.env.AMAZON_ACCESS_KEY_ID,
            secretAccessKey: process.env.AMAZON_SECRET_KEY
        }
    });
    let params = {
        s3Params: {
            Bucket: 'demo-app-audio-tracks',
            Prefix: ''
        }
    };

    api.get('/tracks', (req, res) => {
        getListOfTracks(res);
    });

    api.get('/tracks/:id', (req, res) => {
        getTrackById(res, req.params.id);
    });

    return api;

    // talk to S3
    function getListOfTracks(res) {
        let list = s3Client.listObjects(params);
        list.on('data', (data) => {
            res.send(data);
        });
    }

    function getTrackById(res, key) {
        let params = {
            Bucket: 'demo-app-audio-tracks',
            Key: key
        };
        let downloadStream = s3Client.downloadStream(params);
        downloadStream.pipe(res);
    }
};