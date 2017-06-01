import {version} from '../../package.json';
import {Router} from 'express';
import bot from './bot';

export default ({config, db}) => {
    let api = Router();

    api.use('/bot', bot({config, db}));

    return api;
}
