import { Bot, Context } from "grammy";
import commands from "./commands";
import bot from "./core/bot";

const launchBot = async (bot: Bot<Context>): Promise<void> => {
    try {
        await bot.api.setWebhook(`${process.env.VERCEL_URL}/api/index`);
        console.log(`[SERVER] Bot starting webhook`);
    } catch (e) {
        console.error(e);
    }
};

const DEVELOPMENT_longPollBot = async (bot: Bot<Context>): Promise<void> => {
    try {
        await bot.api.deleteWebhook();
        console.log("[SERVER] Bot starting polling");
        await bot.start();
    } catch (e) {
        console.error(e);
    }
};

bot.use(commands);

process.env.NODE_ENV === "development" ? DEVELOPMENT_longPollBot(bot) : launchBot(bot);

export {};
