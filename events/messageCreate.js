require("dotenv").config();

module.exports = {
    name: 'messageCreate',
    once: false,
    async execute(message) {
        if (message.author.bot) return; // Stops bot from triggering loop if done correctly)
    }
};