import { Context } from "grammy";

const debug = async (ctx: Context): Promise<void> => {
    const data = JSON.stringify(ctx, null, 2);
    JSON.stringify(ctx, null, 2);

    await ctx.reply("```\n" + data + "\n```", { parse_mode: "MarkdownV2" });
};

export default debug;
