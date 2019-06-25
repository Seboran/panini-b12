const Discord = require("discord.js");
const client = new Discord.Client();
const auth = require("../auth.json");
import schedule from "node-schedule";
import bot from "./bot";

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);

  schedule.scheduleJob("0 22 * * *", () => {
    const channel = client.channels.get(auth.CHANNEL_ID);
    channel.send("Pensez à votre B12 !");
  });

  client.on("message", message => {
    if (message.author.bot || !message.channel) return;

    bot.answer(message, "tupu", "toi-même");
    bot.answer(message, "bonjour", "bonjour !");
  });
});

client.login(auth.token);
