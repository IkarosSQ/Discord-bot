const { SlashCommandBuilder } = require("discord.js");
const { EmbedBuilder } = require("discord.js")

const onetoonehundred = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100.];
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

module.exports = {
    data: new SlashCommandBuilder()
        .setName('roll')
        .setDescription('roll from 1 to 100'),

        
    async execute(interaction) {

        console.log("test")
        const rolledNumber = getRandomArbitrary(1, 100);
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