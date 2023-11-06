const { SlashCommandBuilder } = require("discord.js");
const {readLink} = require("fs");
module.exports = {
    data: new SlashCommandBuilder()
        .setName('catme')
        .setDescription('This is a slash command'),

    async execute(interaction) {
        
        await interaction.reply({files:[fs.readLink("https://i0.wp.com/dianaurban.com/wp-content/uploads/2017/07/01-cat-stretching-feet.gif?resize=500%2C399&ssl=1")]});
    },
};
//dette er en command som i teorien skal sende en gif når man skriver "/catme"