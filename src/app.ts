require('@aspecto/opentelemetry')({
    // logger: console,
    local: true,
    env: 'amir-test-env'
});
import express from 'express';
import * as bodyParser from 'body-parser';
import axios from 'axios';

const port = 7070;
const app = express()
    .use(bodyParser.json({ limit: '10mb' }));

app.get('/outgoing-example', async (req, res) => {
    const res2 = await axios.get(`https://api.publicapis.org/random`);
    res.send(res2.data).status(200);
});

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
