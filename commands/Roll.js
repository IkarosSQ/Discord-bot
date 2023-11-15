const { SlashCommandBuilder } = require("discord.js");


const onetoonehundred = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
function getRandomArbitrary(min, max) {
    return Mathfloor(Math.random() * (max - min) + min);
  }

module.exports = {
    data: new SlashCommandBuilder()
        .setName('Roll')
        .setDescription('roll from 10 to 20'),

        
    async execute(interaction) {
        console.log("test")
        const rolledNumber = getRandomArbitrary
        await interaction.reply(`congrats! you rolled a: ${rolledNumber}` );
    },
};