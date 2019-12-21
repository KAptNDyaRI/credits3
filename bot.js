const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("658036104133476382")
setInterval(function() {
channel.send(`kaptn2 kaptn kaptn1 kaptn1 kaptn1`);
}, 30)
})

client.login(process.env.BOT_TOKEN);