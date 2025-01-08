/**
 * Discord Slash Command Registrations
 *
 *
 */

import { REST, Routes } from "discord.js";
import "dotenv/config";

export type CommandType = {
  name: string;
  description: string;
};

const rest = new REST({ version: "10" }).setToken(process.env.BOT_TOKEN);

export async function registerCommands(commands: Array<CommandType>) {
  try {
    console.log("Registering Slash Commands.....");

    const data = await rest.put(
      Routes.applicationCommands(process.env.APPLICATION_ID),
      { body: commands },
    );

    console.log(`Successfully reloaded ${data} application (/) commands.`);
  } catch (error) {
    console.error("There was an error: " + error);
  }
}

export function loadCommands(): Array<CommandType> {
  return [];
}
