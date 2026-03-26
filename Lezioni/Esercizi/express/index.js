//define modules
export function addTimestamp(req, res, next){
    req.timestamp = new Date();
    next();
}
export function logger(req, res, next){
    console.log("LOGGER HAS BEEN CALLED");
    next();
}

const express = require("express");

const app = express();
const port = 3000;

app.use(logger);
app.get("/", (req, res) => {
    res.send("Hello World! " + "Request received at " + req.timestamp);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
