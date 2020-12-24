const { Telegraf } = require('telegraf')
const express = require('express')
const app = express();
var bodyParser = require('body-parser');
const bot = new Telegraf(process.env.BOT_TOKEN)
app.use(bodyParser.json());

app.post('/send-notify', (request, response) => {
    response.send(request.body);
  console.log(request.body);

})

app.listen(3131, () => {console.log('Marketplace app listening on port 3131!')})