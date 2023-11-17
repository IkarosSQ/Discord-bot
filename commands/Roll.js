const { SlashCommandBuilder } = require("discord.js");
const { EmbedBuilder } = require("discord.js")

const onetoonehundred = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

module.exports = {
    data: new SlashCommandBuilder()
        .setName('roll')
        .setDescription('roll from 1 to 20'),

        
    async execute(interaction) {

        console.log("test")
        const rolledNumber = getRandomArbitrary(1, 20);
        const yesEmbed = new EmbedBuilder()
            .setColor(0xff0055)
            .setTitle('You rolled a:')
            .addFields(
                { name: ' ', value: rolledNumber.toString(), size: 12, inline: true },
            )

        await interaction.reply({ embeds: [yesEmbed] });

    },
};
//Dette er en kode som ruller en "dice" han bare tar et random nummer