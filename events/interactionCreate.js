require("dotenv").config();

module.exports = {
  name: 'interactionCreate',
  once: false,
  async execute(interaction) {
    if (interaction.isCommand()) {
      await slashCommandHandler(interaction) // slashCommandHandler() NOT NATIVE FUNCTION
      return
    }
    
  }
};



async function slashCommandHandler(interaction) { // NEEDS TO DO THIS FOR COMMANDS BUILT WITH THIS FILE SYSTEM
  const command = interaction.client.commands.get(interaction.commandName);
  if (command) {
      try {
          await command.execute(interaction);
        return
      }
      catch (error) {
          console.error(error);
          await interaction.reply({ content: `${error}`, ephemeral: true });
          return
      }
  }
}
