const { Telegraf } = require('telegraf');
const fastify = require('fastify');

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.register('Welcome'));
bot.on("message", (ctx) => ctx.reply(ctx.chat.id));
bot.launch().catch(console.error);

const app = fastify();
const port = process.env.PORT || 9011;
const channelId = process.env.CHANNEL_TOKEN;

app.post('/', (req, reply) => {
    const data = JSON.stringify(req.body);
    bot.telegram.sendMessage(channelId, data, {}).catch(console.error);
    reply.send({text: 'Order submitted!'});
});

app.listen({port}, (err) => {
    if (err) {
        console.error(`Error occurred while staring the bot: ${err}`);
        return;
    }
    console.log(`Server started on port: ${port}`);
});