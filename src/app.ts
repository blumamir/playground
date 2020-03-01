import express from 'express';
import * as aspecto from '@aspecto/core';

const port = 7070;
const app = express();
aspecto.init();

app.get("/", (_req, res) => {
    res.send("Hello world!");
});

console.log("hello world");


app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
})