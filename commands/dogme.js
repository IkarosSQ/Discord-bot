const { SlashCommandBuilder } = require("discord.js");

let L1 = "https://tenor.com/view/dog-meme-gif-25326537"
let L2 = "https://tenor.com/view/kleyton-loko-gif-216549716130789892"
let L3 = "https://tenor.com/view/cachorro-feliz-cachorro-sorrindo-gif-13706697108420461541"
let L4 = "https://tenor.com/view/dog-funny-sitting-on-the-toilet-gif-4747509966132101202"
let L5 = "https://tenor.com/view/dog-theoretical-fake-dog-fake-ai-deep-fake-dog-gif-11985677374516977512"
let L6 = "https://tenor.com/view/dog-gif-25785258"
let L7 = "https://tenor.com/view/dog-gif-25785248"
let L8 = "https://tenor.com/view/dog-dog-with-butterfly-on-nose-dog-with-butterfly-butterfly-gif-13282441872748349107"
let L9 = "https://tenor.com/view/bellebows-tiktok-dog-funny-silly-gif-26293491"
let L0 = "https://tenor.com/view/dungeong-gif-1378059698865862259"
const links2 = [L1, L2, L3, L4, L5, L6, L7, L8, L9, L0];

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dogme')
        .setDescription('This is a slash command'),

    async execute(interaction) {
        
        await interaction.reply(links2[(Math.floor(Math.random() * links2.length))]);
    },
};
//dette er en command som i teorien skal sende en random dog gif når man skriver "/dogme"