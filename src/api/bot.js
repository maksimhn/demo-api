import { version } from '../../package.json';
import { Router } from 'express';
import bot from "../models/bot";


export default ({ config, db }) => {
    let api = Router();

    api.get('/greeting', (req, res) => {
        res.json(bot.greetings);
    });

    return api;
}
