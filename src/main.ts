/**
 * Kannatan Bot
 *
 * @author Endrika Nanami
 * @see https://github.com/endrika73
 *
 */

// Load dotenv
import 'dotenv/config'

import {Client, Events, GatewayIntentBits} from 'discord.js'

const token = process.env.DISCORD_TOKEN

// Create a new client instance
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent,
    ]
});


// When the client is ready, run this code (only once).
// The distinction between `client: Client<boolean>` and `readyClient: Client<true>` is important for TypeScript developers.
// It makes some properties non-nullable.
client.once(Events.ClientReady, readyClient => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

// Log in to Discord with your client's token
client.login(token).then(r => r);