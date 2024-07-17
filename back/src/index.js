const express = require('express');
const cors = require('cors');
const app = express();
const port = 3005; 

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
    res.status(200).send("Hey, You are in my backend!!!");
  });

app.listen(port, () => {
    console.log('Example app listening at http://localhost:'+ port);
});