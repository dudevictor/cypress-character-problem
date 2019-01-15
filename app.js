const express = require("express");
const path = require("path");
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.set({ 'content-type': 'text/html;charset=iso-8859-1' });
    res.sendFile(path.resolve(__dirname, 'index.html'));
})

app.listen(port);