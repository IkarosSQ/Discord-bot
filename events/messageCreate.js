const Users = require("../models/users");

require("dotenv").config();

module.exports = {
    name: 'messageCreate',
    once: false,
    async execute(message) {
        if (message.author.bot) return; // Stops bot from triggering loop if done correctly)
    await updateUser(message.author)
    }
};

async function updateUser(user){
  const [user1, created] = await Users.findOrCreate({where:{discordID:user.id},defaults:{name:user.username, level:1, currentxp:"10", xptolevelup:"100"}})
if(parseInt(user1.currentxp) > parseInt(user1.xptolevelup)) {
  user1.update({currentxp: "0", xptolevelup: "100", level: user1.level + 1})
  return
}
  await user1.update({currentxp:parseInt(user1.currentxp) + 10})
  console.log(user1.dataValues.currentxp, user1.level, user1)
}