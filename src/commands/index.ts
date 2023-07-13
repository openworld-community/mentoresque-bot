import { Composer } from "grammy";

import debug from "./debug";

const composer = new Composer();

composer.command("debug", debug);

export default composer;
