import * as express from 'express';
import * as controller from '../controllers/user.controller';

export const userRoute = express.Router();

userRoute.get('/:id?', controller._get);
userRoute.post('/', controller._post);
userRoute.put('/:id?', controller._put);
userRoute.delete('/:id?', controller._delete);

