/**
 * Kannatan Bot
 *
 * @author Endrika Nanami
 * @see https://github.com/endrika73
 *
 */

// Load dotenv
import "dotenv/config";
import { Client, GatewayIntentBits } from "discord.js";
import { registerEvents } from "./events";

const token = process.env.BOT_TOKEN;

// Create a new client instance
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent,
  ],
});

// Register all events
registerEvents(client);

// Log in to Discord with your client's token
client.login(token).then((r) => r);
