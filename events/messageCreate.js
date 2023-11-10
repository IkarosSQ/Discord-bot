const Users = require("../models/users");

require("dotenv").config();

module.exports = {
    name: 'messageCreate',
    once: false,
    async execute(message) {
        if (message.author.bot) return; // Stops bot from triggering loop if done correctly)
    await getUsers(message.author.id)
    }
};

async function getUsers(userID){
  const [user, created] = await Users.findOrCreate({where:{discordID:userID}})
  console.log(user, created)
  await user.update({currentxp:parseInt(user.currentxp) + 10})
}

