const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("657600870082543648")
setInterval(function() {
channel.send(`kaptn3 kaptn3 kaptn3 kaptn3 kaptn3`);
}, 30)
})

client.login(process.env.BOT_TOKEN);