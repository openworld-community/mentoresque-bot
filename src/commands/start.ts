import { Context } from "grammy";
const debug = require("debug")("commands:start");
const txt = require("../messages/registration.json");

const start = async (ctx: Context): Promise<void> => {
    debug("/start command triggered");
    ctx.reply(txt.start);
};

export default start;
