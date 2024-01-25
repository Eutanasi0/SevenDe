const express = require("express");
//
//
//
//

const app = express();

app.get("/", (req, res) => {
    res.send("hi, im wasa");
})

app.listen(3000, () => {
    console.log("hi, im wasa and im in localhost", 3000);
});