/**
 * Register Slash Commands Via Terminal
 *
 */

import { loadCommands, registerCommands } from "./commands";

registerCommands(loadCommands()).then();
