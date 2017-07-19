import { version } from '../../package.json';
import { Router } from 'express';
// import bot from "../models/bot";
import botActions from '../features/bot/index.js';
// import botActions from "index.js";

export default ({ config, db }) => {
    let api = Router();

    api.get('/greeting', (req, res) => {
        // console.log(botActions);
        botActions.greetings(req, res);
    });

    api.post('/q', (req, res) => {
        res.send('Response to Q');
    });

    api.delete('/clear', (req, res) => {

    });

    return api;
}
