import { version } from '../../package.json';
import { Router } from 'express';
import bot from './bot';
import tracks from './tracks';
import image from './image';

export default ({ config, db }) => {
    let api = Router();

    api.use('/bot', bot({ config, db }));

    api.use('/music', tracks({ config, db }));

    app.use('/image', image({ config, db }));

    return api;
}
