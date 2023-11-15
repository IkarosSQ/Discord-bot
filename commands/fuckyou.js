const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('fuckyou')
        .setDescription('This is a slash command'),

    async execute(interaction) {
        console.log("test")
        await interaction.reply("Fuck me? no, fuck you!");
    },
};