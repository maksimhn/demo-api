// var restify = require('restify');
import {Router} from 'express';
// import Builder from 'botbuilder';
import env from 'node-env-file';
// import bot from "../../models/bot";

env('./.env');


let builder = require('botbuilder');
let connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});
let bot = new builder.UniversalBot(connector);
// bot.dialog('/', function (session) {
//     session.send('Hello World');
// });

let api = Router();

let greetings = (req, res) => {
    // res.json(bot.greetings);
    bot.dialog('/', function (session) {
        session.send('Hello World');
    });
};

export default {
    greetings
};