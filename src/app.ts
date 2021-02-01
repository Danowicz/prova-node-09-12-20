import config from "./config/config";
import * as express from "express";
import { userRoute } from "./routes/user.route";


const app = express();
app.set('port', config.server.port);
app.set('hostname', config.server.hostname);


app 

    .get('/', (req: express.Request, res: express.Response) => {
        res.status(200).send({
            title: config.api.name,
            version: config.api.version,
        });
    })

    .use('/users', userRoute)

    .use((req: express.Request, res: express.Response) => {
        res.status(404).send("404 not found");
    });

    
export default app;
