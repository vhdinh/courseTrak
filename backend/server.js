import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import api from './config/api';

const app = express();

app.use(cors());
app.use(bodyParser.json());

const port = 4000;

app.use('/', api);

app.listen(port, () => {
    console.log(`EXPRESS SET UP ON ${port}`);
});