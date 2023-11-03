const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('This is a slash command'),

    async execute(interaction) {
        console.log("test")
        await interaction.reply("pong");
    },
};