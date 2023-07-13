import { Context } from "grammy";
import pretty from '../utils/pretty-print-json'

const debug = async (ctx: Context): Promise<void> => {

    ctx.reply(pretty(ctx));

};

export default debug;
