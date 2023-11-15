const { SlashCommandBuilder } = require("discord.js");
const { EmbedBuilder } = require("discord.js")
const Users = require("../models/users");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('xp')
        .setDescription('This is a slash command'),

    async execute(interaction) {
        
        const [level, currentxp, xptolevelup] = await getUsers(interaction.user)
        console.log (level, currentxp, xptolevelup)
        const exampleEmbed = new EmbedBuilder()
            .setColor(0x3bed09)
            .setTitle('this is your xp')
            .addFields(
                { name: '\u200B', value: '\u200B' },
                { name: 'your current xp amount', value: currentxp.toString(), inline: true },
                { name: 'your current level', value: level.toString(), inline: true },
                { name: 'This is your xp to level up', value: xptolevelup.toString(), inline: true }
            )
            .setTimestamp()
        await interaction.reply({ embeds: [exampleEmbed] });
        
    },
};

async function getUsers(user){
    const [user1, created] = await Users.findOrCreate({where:{discordID:user.id}, defaults:{name:user.username}})
    console.log(user1, created)
    return [user1.level, user1.currentxp, user1.xptolevelup]
}
  