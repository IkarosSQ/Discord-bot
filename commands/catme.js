const { SlashCommandBuilder } = require("discord.js");
const fs = require("fs")
module.exports = {
    data: new SlashCommandBuilder()
        .setName('catme')
        .setDescription('This is a slash command'),

    async execute(interaction) {
        
        await interaction.reply({files:[fs.readFile("C:\\Users\\Bruker\\Desktop\\Discord bot\\catgifs\\01-cat-stretching-feet.webp")]});
    },
};