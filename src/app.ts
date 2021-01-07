require('@aspecto/opentelemetry')({
    // logger: console,
    local: false,
    env: 'amir-test-env'
});
import express from 'express';
import * as bodyParser from 'body-parser';
import axios from 'axios';
const x = require('aws-sdk');

const { Consumer } = require('sqs-consumer');


const sqs = Consumer.create({
    queueUrl: 'https://sqs.eu-west-1.amazonaws.com/731241200085/dev-amir',
    handleMessage: async (message: any) => {
        console.log(message);
    }
})

sqs.on('error', (err: any) => {
    console.error(err.message);
});

sqs.on('processing_error', (err: any) => {
    console.error(err.message);
})

sqs.start();

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
