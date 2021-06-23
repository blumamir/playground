const instrument = require("@aspecto/opentelemetry");
instrument({
  ci: true,
  aspectoAuth: "efff5d31-b87b-4638-8fb4-e6253e8337f3",
  exportBatchTimeout: 1,
});

console.log(process.env['GITHUB_SHA']);

import express from "express";
const app = express();
app.use("/ci-test-endpoint", (req, res, next) => {
  res.json({ success: "this is text, not boolean" });
});

app.listen(3456, () => console.log("listening on port 3456"));
