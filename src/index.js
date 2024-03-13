const { Telegraf } = require('telegraf');
const fastify = require('fastify');
const cors = require('@fastify/cors');

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.register('Welcome'));
bot.launch().catch(console.error);

const app = fastify();
const port = process.env.PORT || 9011;
const channelId = process.env.CHANNEL_TOKEN;

const formatMessage = (data) => {
    const { productName, color, size, customerName, phoneNumber } = data;
    const date = new Date();
    const formatDate = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
    return `*Замовлення:*\n
    Назва товару: *${productName}*,
    Колір: *${color}*,
    Розмір: *${size}*,
    Ім'я Замовника: *${customerName}*,
    Номер Телефону: *${phoneNumber}*,
    Дата замовлення: *${formatDate}*`
}

app.register(cors, {});

app.post('/bot/', (req, reply) => {
    const data = req.body;
    const message = formatMessage(data);
    bot.telegram.sendMessage(channelId, message, {parse_mode: 'Markdown'}).catch(console.error);
    reply.send({text: 'Order submitted!'});
});

app.listen({port}, (err) => {
    if (err) {
        console.error(`Error occurred while staring the bot: ${err}`);
        return;
    }
    console.log(`Server started on port: ${port}`);
});