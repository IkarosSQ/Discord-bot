const { SlashCommandBuilder } = require("discord.js");
const links = [L1, L2, L3, L4, L5, L6, L7, L8, L9, L0];
let L0 = "https://images.hive.blog/p/2ufhwNgM3qHKGxq8wdcWAiFpcm29FF1vQ7VZHkTuxDL2jbDCRyUWSPzuZcaFUA3fmHzubFgSq?format=match&mode=fit" = 0
let L1 = "https://i0.wp.com/dianaurban.com/wp-content/uploads/2017/07/01-cat-stretching-feet.gif?resize=500%2C399&ssl=1" = 1
let L2 = "https://media.tenor.com/7JbbkdTGA38AAAAd/cute-cat.gif" = 2
let L3 = "https://www.cutecatgifs.com/wp-content/uploads/2021/02/wow.gif" = 3
let L4 = "https://media0.giphy.com/media/H4DjXQXamtTiIuCcRU/200.gif?cid=6c09b9522yrb6ka5if73j05vxqzoq9g59jxs0hqdx4lhxv7u&ep=v1_gifs_search&rid=200.gif&ct=g" = 4
let L5 = "https://i0.wp.com/dianaurban.com/wp-content/uploads/2017/07/16-cat-disappearing.gif?resize=450%2C272&ssl=1" = 5
let L6 = "https://media.tenor.com/QFLzwvAd-LMAAAAM/cat-sope.gif" = 6
let L7 = "https://media.tenor.com/bhz9WIjKpeQAAAAd/funny-cat.gif" = 7
let L8 = "https://media3.giphy.com/media/12d71hRlD9T2Cc/200w.gif?cid=6c09b952x78kqbljr8p4qxmyio2ir9ua05d4qjohct8ctrg0&ep=v1_gifs_search&rid=200w.gif&ct=g" = 8
let L9 = "https://media1.giphy.com/media/v6aOjy0Qo1fIA/200w.gif?cid=6c09b9526sidj4hc6t7lk6wgv1mqhnkovaby2q15augl63jg&ep=v1_gifs_search&rid=200w.gif&ct=g" = 9

Math.random() * 10 + 1

module.exports = {
    data: new SlashCommandBuilder()
        .setName('catme')
        .setDescription('This is a slash command'),

    async execute(interaction) {
        
        await interaction.reply();
    },
};
//dette er en command som i teorien skal sende en random gif når man skriver "/catme"