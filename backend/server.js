import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './config/api';

const app = express();

app.use(cors());
app.use(bodyParser.json());

const port = 4000;

app.use('/', router);

app.listen(port, () => {
    console.log(`EXPRESS SET UP ON ${port}`);
});