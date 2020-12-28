const { Telegraf, Markup, Extra } = require('telegraf');
const express = require('express')
const app = express();
var bodyParser = require('body-parser');
const bot = new Telegraf(process.env.BOT_TOKEN)
app.use(bodyParser.json());

app.post('/send-notify', (request, response) => {
    const info = request.body;
    const keyboard = Markup.inlineKeyboard([
        Markup.urlButton(info.urlText ? info.urlText : "Go to site", info.url)
    ])
    bot.telegram.sendMessage(info.to,info.message,info.url ? Extra.markup(keyboard) : {});
    response.sendStatus(200);
})
app.listen(3131, () => {console.log('Marketplace app listening on port 3131!')})