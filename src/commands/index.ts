import { Composer } from "grammy";

import debug from "./debug";
import start from "./start";

const composer = new Composer();

composer.command("debug", debug);
composer.command("start", start);

export default composer;
