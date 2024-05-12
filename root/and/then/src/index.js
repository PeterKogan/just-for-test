const express = require('express');
const app = express();

app.get('/', async (req, res) => {
    const key = req.query.key, input = req.query.input;
    const re = new RegExp("\\b" + key + "=(.*)");

    res.send(re.test(input));
});

app.listen(3000);
