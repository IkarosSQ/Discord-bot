const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('Money')
        .setDescription('This is a slash command'),

    async execute(interaction) {

        await interaction.reply("your balance is...");
    },
};