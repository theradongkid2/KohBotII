const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const token = process.env.token;
const fetch = require("node-fetch");
var counter = 0;
var tommyShut = false;
var tommySaid = false;
var lastUser = "730004103719288904"
var botHurtResponses = ["you cant catch me im the gingerbread man" , "do you dare to harm the seraphim?", "are you challenging me mortal", "how dare you try commit such war crimes", `k!warn @user bad boy`, "never going to happen", "haha, look where you are then look up.", "Would you like it if I did it to you?", "Perms are a privalege, not a right", "So you have chosen death", "do you honestly think that you could find a loophole in my code?", "Nice Try"];
var userHurtResponses = ["are you sure about this", "don't do it commander", "call lifeline on 13 11 14", "what are you? a masochist?", "please do not make me kill you", "calm down calm down, theres no need to do that", "no"]
function randomise(num){
  return Math.floor (Math.random() * (num - 1 + 1)) + 1;
}

function scheduleWarning(time, triggerThis){

  // get hour and minute from hour:minute param received, ex.: '16:00'
  const hour = Number(time.split(':')[0]);
  const minute = Number(time.split(':')[1]);

  // create a Date object at the desired timepoint
  const startTime = new Date(); startTime.setHours(hour, minute, 0);
  const now = new Date();

  // increase timepoint by 24 hours if in the past
  if (startTime.getTime() < now.getTime()) {
    startTime.setHours(startTime.getHours() + 24);
  }

  // get the interval in ms from now to the timepoint when to trigger the alarm
  const firstTriggerAfterMs = startTime.getTime() - now.getTime();

  // trigger the function triggerThis() at the timepoint
  // create setInterval when the timepoint is reached to trigger it every day at this timepoint
  setTimeout(function(){
    triggerThis();
    setInterval(triggerThis, 24 * 60 * 60 * 1000);
  }, firstTriggerAfterMs);
}

//Terminal User Interface
client.on("ready", () => {
  console.log(`KohBot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  client.user.setActivity(`k!help - Having an Existential Crisis`, { type: 'STREAMING' , url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"});
  console.log("Servers:");
    client.guilds.cache.forEach((guild) => {
        console.log(" - " + guild.name);
    });
  const channel = client.channels.cache.get("868370150972330054");
  if (!channel) return console.error("The channel does not exist!");
  channel.join().then(connection => {
    // Yay, it worked!
    console.log("Successfully connected.");
  }).catch(e => {
    // Oh no, it errored! Let's log it to console :)
    console.error(e);
  });
});


client.on("message", async message => {
  if(message.author.bot) return;
  var messageContent = message.content;
  if(messageContent.startsWith("https://tenor.com/view/")) return;
  if(message.channel.id === "863313143161159720" && messageContent.includes("http") && messageContent.includes("://") && !message.member.roles.cache.some(r=>["Administrator", "Moderator", "↷ admin", "↷ moderators", "・trial"].includes(r.name))){
    message.delete();
    let memberId = message.member.id
    let server = message.guild.name;
    
      const warnEmbed = {
        color: 0xFFFF00,
        title: `Warn Log:`,
        thumbnail: {
          url: member.user.avatarURL(String)
        },
        fields: [
          {
          name: `Warned User: ${member.user.tag}`,
          value: `Warn Reason: Links in General\n Message: ${messageContent}\n User Id: ${memberId}\n Moderator: AutoMod\n Server: ${server}`
          },
        ],
        timestamp: new Date(),
          footer: {
              text: 'KohBot by MasterKohder6',
              icon_url: 'https://cdn.discordapp.com/avatars/730004103719288904/ce269b42ef41f924bdeb4e3de9d0cb26.png?size=2048',
          },
      };
    client.channels.cache.get("839002657908850688").send({ embed: warnEmbed });
    message.reply(`You cannot send links here!`);
    client.users.cache.get(message.member.id).send(`You have been warned in the Sydney Highschool Community for sending links in general!`);
  } else if(message.channel.id === "863313541830148126" && messageContent.includes("http") && messageContent.includes("://") && !message.member.roles.cache.some(r=>["Administrator", "Moderator", "↷ admin", "↷ moderators", "・trial"].includes(r.name))){
    message.delete();
    let memberId = message.member.id
    let server = message.guild.name;
    
      const warnEmbed = {
        color: 0xFFFF00,
        title: `Warn Log:`,
        thumbnail: {
          url: member.user.avatarURL(String)
        },
        fields: [
          {
          name: `Warned User: ${member.user.tag}`,
          value: `Warn Reason: Links in General\n Message: ${messageContent}\n User Id: ${memberId}\n Moderator: AutoMod\n Server: ${server}`
          },
        ],
        timestamp: new Date(),
          footer: {
              text: 'KohBot by MasterKohder6',
              icon_url: 'https://cdn.discordapp.com/avatars/730004103719288904/ce269b42ef41f924bdeb4e3de9d0cb26.png?size=2048',
          },
      };
    client.channels.cache.get("839002657908850688").send({ embed: warnEmbed });
    message.reply(`You cannot send links here!`);
    client.users.cache.get(message.member.id).send(`You have been warned in the Sydney Highschool Community for sending links in general!`);
  };
})

client.on("messageUpdate", async (oldMessage, message) => {
  if(message.author.bot) return;
  var messageContent = message.content;
  if(messageContent.startsWith("https://tenor.com/view/")) return;
  if(message.channel.id === "863313143161159720" && messageContent.includes("http") && messageContent.includes("://") && !message.member.roles.cache.some(r=>["Administrator", "Moderator", "↷ admin", "↷ moderators", "・trial"].includes(r.name))){
    message.delete();
    let memberId = message.member.id
    let server = message.guild.name;
    
      const warnEmbed = {
        color: 0xFFFF00,
        title: `Warn Log:`,
        thumbnail: {
          url: member.user.avatarURL(String)
        },
        fields: [
          {
          name: `Warned User: ${member.user.tag}`,
          value: `Warn Reason: Links in General\n Message: ${messageContent}\n User Id: ${memberId}\n Moderator: AutoMod\n Server: ${server}`
          },
        ],
        timestamp: new Date(),
          footer: {
              text: 'KohBot by MasterKohder6',
              icon_url: 'https://cdn.discordapp.com/avatars/730004103719288904/ce269b42ef41f924bdeb4e3de9d0cb26.png?size=2048',
          },
      };
    client.channels.cache.get("839002657908850688").send({ embed: warnEmbed });
    message.reply(`You cannot send links here!`);
    client.users.cache.get(message.member.id).send(`You have been warned in the Sydney Highschool Community for sending links in general!`);
  } else if(message.channel.id === "863313541830148126" && messageContent.includes("http") && messageContent.includes("://") && !message.member.roles.cache.some(r=>["Administrator", "Moderator", "↷ admin", "↷ moderators", "・trial"].includes(r.name))){
    message.delete();
    let memberId = message.member.id
    let server = message.guild.name;
    
      const warnEmbed = {
        color: 0xFFFF00,
        title: `Warn Log:`,
        thumbnail: {
          url: member.user.avatarURL(String)
        },
        fields: [
          {
          name: `Warned User: ${member.user.tag}`,
          value: `Warn Reason: Links in General\n Message: ${messageContent}\n User Id: ${memberId}\n Moderator: AutoMod\n Server: ${server}`
          },
        ],
        timestamp: new Date(),
          footer: {
              text: 'KohBot by MasterKohder6',
              icon_url: 'https://cdn.discordapp.com/avatars/730004103719288904/ce269b42ef41f924bdeb4e3de9d0cb26.png?size=2048',
          },
      };
    client.channels.cache.get("839002657908850688").send({ embed: warnEmbed });
    message.reply(`You cannot send links here!`);
    client.users.cache.get(message.member.id).send(`You have been warned in the Sydney Highschool Community for sending links in general!`);
  };
})

client.on("message", async message => {
  if(message.author.bot) return;
  if(message.guild.id !== "832546634729914379") return;
  //if(message.member.roles.cache.some(r=>["Administrator", "Moderator", "↷ admin", "↷ moderators", "・trial"].includes(r.name))) return;
  var blacklistedWords = [
    "nigga",
    "cum",
    "cum.",
    "cum ",
    " cum",
    "cum!",
    "faggot",
    "hentai",
    "porn",
    "pussy",
    "retard",
    "slut",
    "whore",
    "chink",
    "retarded",
    "niggar",
    "nigga",
    "niqqa",
    "niigar",
    "nigger",
    "cock",
    "pussy",
    "penis",
    "trannie",
    "tranie"
  ];

  var blacklistedChar = [
    "cunt",
    "nigga",
    "faggot",
    "hentai",
    "porn",
    "pussy",
    "retard",
    "slut",
    "whore",
    "chink",
    "retarded",
    "niggar",
    "nigga",
    "niqqa",
    "niigar",
    "nigger",
    "trannie",
    "tranie"
  ];
  var warned = false;
  var messageContent = message.content;
  var messageContentArr = messageContent.split(" ");
  messageContentArr.forEach(e => {
    blacklistedChar.forEach(d => {
      var wordCharArr = e.split("");
      wordCharArr.forEach(b => {
        if(b === "0") b = "o";
        else if(b === "3") b = "e";
        else if(b === "ü") b = "u";
        else if(b === "ï") b = "i";
        else if(b === "5") b = "5";
        else if(b === "1") b = "i";
        else if(b === "ㅇ") b = "o"
      });
      e = wordCharArr.join("");
      if(e.includes(d)){
        message.delete();
        let memberId = message.member.id
        let server = message.guild.name;
        let member = message.member;
        const warnEmbed = {
          color: 0xFFFF00,
          title: `Warn Log:`,
          thumbnail: {
            url: member.user.avatarURL(String)
          },
          fields: [
            {
            name: `Warned User: ${member.user.tag}`,
            value: `Warn Reason: Use of Blacklisted Characters\n Message: ${messageContent}\n User Id: ${memberId}\n Moderator: AutoMod\n Server: ${server}`
            },
          ],
          timestamp: new Date(),
            footer: {
                text: 'KohBot by MasterKohder6',
                icon_url: 'https://cdn.discordapp.com/avatars/730004103719288904/ce269b42ef41f924bdeb4e3de9d0cb26.png?size=2048',
            },
        };
        client.channels.cache.get("873469804982464532").send({ embed: warnEmbed });
        //message.reply(`You cannot say that here!`);
        client.channels.cache.get("873469804982464532").send(`-warn <@${memberId}> blacklisted word`);
        //client.users.cache.get(message.member.id).send(`You have been warned in the Sydney Highschool Community for Using Blacklisted Words!`);
        warned = true;
        return;
      };
    });
    
    blacklistedWords.forEach(a => {
      if(warned === true) return;
      var wordCharArr = e.split("");
      wordCharArr.forEach(b => {
        if(b === "0") b = "o";
        else if(b === "3") b = "e";
        else if(b === "ü") b = "u";
        else if(b === "ï") b = "i";
        else if(b === "5") b = "5";
        else if(b === "1") b = "i";
        else if(b === "ㅇ") b = "o"
      });
      e = wordCharArr.join("");
      if(e.toLowerCase() === a.toLowerCase()){
        message.delete();
        let memberId = message.member.id
        let server = message.guild.name; 
        let member = message.member; 
        const warnEmbed = {
          color: 0xFFFF00,
          title: `Warn Log:`,
          thumbnail: {
            url: member.user.avatarURL(String)
          },
          fields: [
            {
            name: `Warned User: ${member.user.tag}`,
            value: `Warn Reason: Use of Blacklisted Words\n Message: ${messageContent}\n User Id: ${memberId}\n Moderator: AutoMod\n Server: ${server}`
            },
          ],
          timestamp: new Date(),
            footer: {
                text: 'KohBot by MasterKohder6',
                icon_url: 'https://cdn.discordapp.com/avatars/730004103719288904/ce269b42ef41f924bdeb4e3de9d0cb26.png?size=2048',
            },
        };
        client.channels.cache.get("873469804982464532").send({ embed: warnEmbed });
        //message.reply(`You cannot say that here!`);
        client.channels.cache.get("873469804982464532").send(`-warn <@${memberId}> blacklisted word`);
        //client.users.cache.get(message.member.id).send(`You have been warned in the Sydney Highschool Community for Using Blacklisted Words!`);
        return;
      };
    });
  });
  warned = false;
});

client.on("messageUpdate", async (oldMessage, message) => {
  if(message.author.bot) return;
  if(message.guild.id !== "832546634729914379") return;
  //if(message.member.roles.cache.some(r=>["Administrator", "Moderator", "↷ admin", "↷ moderators", "・trial"].includes(r.name))) return;
  var blacklistedWords = [
    "nigga",
    "cum",
    "cum.",
    "cum ",
    " cum",
    "cum!",
    "faggot",
    "hentai",
    "porn",
    "nigga",
    "pussy",
    "retard",
    "slut",
    "whore",
    "chink",
    "retarded",
    "niggar",
    "niqqa",
    "niigar",
    "nigger",
    "cock",
    "pussy",
    "penis",
    "trannie",
    "tranie"
  ];

  var blacklistedChar = [
    "cunt",
    "nigga",
    "faggot",
    "hentai",
    "porn",
    "pussy",
    "retard",
    "slut",
    "whore",
    "chink",
    "retarded",
    "niggar",
    "niqqa",
    "nigga",
    "niigar",
    "nigger",
    "trannie",
    "tranie"
  ];
  var warned = false;
  var messageContent = message.content;
  var messageContentArr = messageContent.split(" ");
  messageContentArr.forEach(e => {
    blacklistedChar.forEach(d => {
      var wordCharArr = e.split("");
      wordCharArr.forEach(b => {
        if(b === "0") b = "o";
        else if(b === "3") b = "e";
        else if(b === "ü") b = "u";
        else if(b === "ï") b = "i";
        else if(b === "5") b = "5";
        else if(b === "1") b = "i";
        else if(b === "ㅇ") b = "o"
      });
      e = wordCharArr.join("");
      if(e.includes(d)){
        message.delete();
        let memberId = message.member.id
        let server = message.guild.name;
        let member = message.member;
        const warnEmbed = {
          color: 0xFFFF00,
          title: `Warn Log:`,
          thumbnail: {
            url: member.user.avatarURL(String)
          },
          fields: [
            {
            name: `Warned User: ${member.user.tag}`,
            value: `Warn Reason: Use of Blacklisted Words\n Message: ${messageContent}\n User Id: ${memberId}\n Moderator: AutoMod\n Server: ${server}`
            },
          ],
          timestamp: new Date(),
            footer: {
                text: 'KohBot by MasterKohder6',
                icon_url: 'https://cdn.discordapp.com/avatars/730004103719288904/ce269b42ef41f924bdeb4e3de9d0cb26.png?size=2048',
            },
        };
        client.channels.cache.get("873469804982464532").send({ embed: warnEmbed });
        //message.reply(`You cannot say that here!`);
        client.channels.cache.get("873469804982464532").send(`-warn <@${memberId}> blacklisted word`);
        //client.users.cache.get(message.member.id).send(`You have been warned in the Sydney Highschool Community for Using Blacklisted Words!`);
        warned = true;
        return;
      };
    });
    blacklistedWords.forEach(a => {
      if(warned) return;
      var wordCharArr = e.split("");
      wordCharArr.forEach(b => {
        if(b === "0") b = "o";
        else if(b === "3") b = "e";
        else if(b === "ü") b = "u";
        else if(b === "ï") b = "i";
        else if(b === "5") b = "5";
        else if(b === "1") b = "i";
        else if(b === "ㅇ") b = "o"
      });
      e = wordCharArr.join("");
      if(e.toLowerCase() === a.toLowerCase()){
        message.delete();
        let memberId = message.member.id
        let server = message.guild.name; 
        let member = message.member; 
        const warnEmbed = {
          color: 0xFFFF00,
          title: `Warn Log:`,
          thumbnail: {
            url: member.user.avatarURL(String)
          },
          fields: [
            {
            name: `Warned User: ${member.user.tag}`,
            value: `Warn Reason: Use of Blacklisted Words\n Message: ${messageContent}\n User Id: ${memberId}\n Moderator: AutoMod\n Server: ${server}`
            },
          ],
          timestamp: new Date(),
            footer: {
                text: 'KohBot by MasterKohder6',
                icon_url: 'https://cdn.discordapp.com/avatars/730004103719288904/ce269b42ef41f924bdeb4e3de9d0cb26.png?size=2048',
            },
        };
        client.channels.cache.get("873469804982464532").send({ embed: warnEmbed });
        //message.reply(`You cannot say that here!`);
        client.channels.cache.get("873469804982464532").send(`-warn <@${memberId}> blacklisted word`);
        //client.users.cache.get(message.member.id).send(`You have been warned in the Sydney Highschool Community for Using Blacklisted Words!`);
        return;
      };
    });
  });
  warned = false;
});

var savedMessage;
var messageAuthor;

client.on("messageDelete", async message => {
  savedMessage = message.content;
  messageAuthor = message.author;
})


client.on("guildMemberRemove", async member => {
  const warnEmbed = {
    color: 0x808080,
    title: `User Left:`,
    thumbnail: {
      url: member.user.avatarURL(String)
    },
    fields: [
      {
      name: `${member.user.tag}`,
      value: `Left the Server at ${new Date()}`
      },
    ],
    timestamp: new Date(),
      footer: {
          text: 'KohBot by MasterKohder6',
          icon_url: 'https://cdn.discordapp.com/avatars/730004103719288904/ce269b42ef41f924bdeb4e3de9d0cb26.png?size=2048',
      },
  };
  client.channels.cache.get("839002657908850688").send({ embed: warnEmbed });
})

client.on("guildMemberAdd", async member => {
  const warnEmbed = {
    color: 0x00FF00,
    title: `New User:`,
    thumbnail: {
      url: member.user.avatarURL(String)
    },
    fields: [
      {
      name: `${member.user.tag}`,
      value: `Joined the Server at ${new Date()}`
      },
    ],
    timestamp: new Date(),
      footer: {
          text: 'KohBot by MasterKohder6',
          icon_url: 'https://cdn.discordapp.com/avatars/730004103719288904/ce269b42ef41f924bdeb4e3de9d0cb26.png?size=2048',
      },
  };
  client.channels.cache.get("839002657908850688").send({ embed: warnEmbed });
})

client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(command === "help"){
    const args = message.content.split(' ');
    if(!args[1]){
      const warnEmbed = {
        color: 0xFF69B4,
        title: `Help - Command Categories`,
        fields: [
          {
          name: `Moderator Commands`,
          value: `Use k!help mod`
          },
          {
            name: `Fun Commands`,
            value: `Use k!help fun`
            },
            {
              name: "Image Commands",
              value: "Use k!help image"
            },
              {
                  name: `Miscellaneous Commands`,
                  value: `Use k!help misc`
                  },
        ],
        timestamp: new Date(),
          footer: {
              text: 'KohBot by MasterKohder6',
              icon_url: 'https://cdn.discordapp.com/avatars/730004103719288904/ce269b42ef41f924bdeb4e3de9d0cb26.png?size=2048',
          },
      };
      message.channel.send({ embed: warnEmbed });
    } else if(args[1] === "mod"){
      const warnEmbed = {
        color: 0xFF69B4,
        title: `Help - Moderator Commands`,
        fields: [
          {
          name: `Kick (Admins Only)`,
          value: `Usage: k!kick @user reason [used to kick members]`
          },
          {
            name: `Ban (Admins Only)`,
            value: `Usage: k!ban @user reason [used to ban members]`
            },
            {
              name: `Warn (Admins Only)`,
              value: `Usage: k!warn @user reason [used to warn members]`
              },
              {
                name: `Purge (Admins Only)`,
                value: `Usage: k!purge number (1-100) [used to clear/delete an amount of messages]`
                },
                {
                  name: `Mute (Admins Only)`,
                  value: `Usage: k!mute @user reason [used to mute members]`
                  },
                  {
                    name: `Unmute (Admins Only)`,
                    value: `Usage: k!unmute @user [used to unmute members]`
                    }
        ],
        timestamp: new Date(),
          footer: {
              text: 'KohBot by MasterKohder6',
              icon_url: 'https://cdn.discordapp.com/avatars/730004103719288904/ce269b42ef41f924bdeb4e3de9d0cb26.png?size=2048',
          },
      };
      message.channel.send({ embed: warnEmbed });
    } else if(args[1] === "fun"){
      const warnEmbed = {
        color: 0xFF69B4,
        title: `Help - Fun Commands`,
        fields: [
          {
            name: `Useless Fact`,
            value: `Usage: k!fact [sends a random useless fact]`
            },
          {
            name: `Ship`,
            value: `Usage: k!ship person1 person2 [sends percentage of compatibility between two people/items]`
            },
          {
            name: `Meme`,
            value: `Usage: k!meme [sends a random meme]`
            },
            {
              name: `Say (Restricted)`,
              value: `Usage: k!say a sentence [used to repeat a message, and delete the commanding message (looks like bot speaks)]`
              },
                  {
                    name: `Quote`,
                    value: `Usage: k!quote [sends a random quote]`
                    }
        ],
        timestamp: new Date(),
          footer: {
              text: 'KohBot by MasterKohder6',
              icon_url: 'https://cdn.discordapp.com/avatars/730004103719288904/ce269b42ef41f924bdeb4e3de9d0cb26.png?size=2048',
          },
      };
      message.channel.send({ embed: warnEmbed });
    } else if(args[1] === "diao"){
      const warnEmbed = {
        color: 0xFF69B4,
        title: `Help - Tommy Diao Torture Commands`,
        fields: [
          {
          name: `Tommy Shut Up (Admins Only)`,
          value: `Usage: k!tommyshut [Responds with @RA1N, Shut Up whenever the man speaks. By default off.]`
          },
          {
            name: `Tommy Translation (Admins Only)`,
            value: `Usage: k!tommysaid [Responds with a piglatin translation of the man's message. By default off]`
            }
        ],
        timestamp: new Date(),
          footer: {
              text: 'KohBot by MasterKohder6',
              icon_url: 'https://cdn.discordapp.com/avatars/730004103719288904/ce269b42ef41f924bdeb4e3de9d0cb26.png?size=2048',
          },
      };
      message.channel.send({ embed: warnEmbed });
    } else if(args[1] === "misc"){
      const warnEmbed = {
        color: 0xFF69B4,
        title: `Help - Miscellaneous Commands`,
        fields: [
          {
            name: `Ping`,
            value: `Usage: k!ping [used to show latency/ping.]`
            },
            {
              name: `Poll`,
              value: `Usage: k!poll a question [sends a message with that question, with reacting with a thumbs up and down for a poll]`
              },
            {
              name: `User Statistics`,
              value: `Usage: k!userstats @user or k!userstats <user_id> [shows a user's avatar, status and join/creation dates.]`
              },
            {
              name: "User Avatar",
              value: "Usage: k!avatar @user or k!avatar <user_id> [shows the link to the user's avatar and displays it. Leave blank to get own avatar.]"
            },
            {
              name:"Time",
              value: "Usage: k!time [Shows the Time AEST]"
            }
        ],
        timestamp: new Date(),
          footer: {
              text: 'KohBot by MasterKohder6',
              icon_url: 'https://cdn.discordapp.com/avatars/730004103719288904/ce269b42ef41f924bdeb4e3de9d0cb26.png?size=2048',
          },
      };
      message.channel.send({ embed: warnEmbed });
    } else if(args[1] === "image"){
      const warnEmbed = {
        color: 0xFF69B4,
        title: `Help - Image Commands`,
        fields: [
          {
            name: `Birb`,
            value: `Usage: k!birb [sends a random bird picture]`
            },
          {
          name: `Shiba`,
          value: `Usage: k!shiba [sends a random shiba inu picture]`
          },
          {
            name: `Cat`,
            value: `Usage: k!cat [sends a random cat picture]`
            },
        ],
        timestamp: new Date(),
          footer: {
              text: 'KohBot by MasterKohder6',
              icon_url: 'https://cdn.discordapp.com/avatars/730004103719288904/ce269b42ef41f924bdeb4e3de9d0cb26.png?size=2048',
          },
      };
      message.channel.send({ embed: warnEmbed });
    } else{
      message.reply("Wrong Usage: Try k!help again...")
    }
  }





  if(command === "time"){
    var date = new Date()
    var seconds = date.getSeconds();
    if(seconds.length === 1) seconds = `0${seconds}`
    message.channel.send(`The time is: ${date.getHours() + 10}:${date.getMinutes()}:${seconds}, in AEST.`)
  }
  if(command === "say") {
    if(!message.member.roles.cache.some(r=>["Administrator", "Moderator", "↷ admin", "↷ moderators", "・trial"].includes(r.name))) return;
      const sayMessage = args.join(" ");
      message.delete().catch(O_o=>{}); 
      message.channel.send(`${sayMessage}`);
  };
  if(command === "h") {
      const sayMessage = args.join(" ");
      client.channels.cache.get("863313143161159720").send(`${sayMessage}`);
  };
  if(command === "ping") {
      const m = await message.channel.send("Ping!");
      m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
  };
  if(command === "purge") {
    if(!message.member.roles.cache.some(r=>["Administrator", "Moderator", "↷ admin", "↷ moderators", "・trial"].includes(r.name)) )
        return message.reply("Sorry, you don't have permissions to use this!");
      const deleteCount = parseInt(args[0], 10);
      if(!deleteCount || deleteCount < 2 || deleteCount > 10000)
        return message.reply("Please provide a number between 2 and 10000 for the number of messages to delete");
      const fetched = await message.channel.messages.fetch({limit: deleteCount});
      message.channel.bulkDelete(fetched)
        .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
    }
  
     if(command === "kick") {
      if(!message.member.roles.cache.some(r=>["Administrator", "Moderator", "↷ admin", "↷ moderators", "・trial"].includes(r.name)) )
        return message.reply("Sorry, you don't have permissions to use this!");
      let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
      if(!member)
        return message.reply("Please mention a valid member of this server");
        if(member.id === "730004103719288904") return message.reply(botHurtResponses[randomise(11)]);
        if(member.id === message.author.id) return message.reply(userHurtResponses[randomise(6)]);
      if(!member.kickable) 
        return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
      let reason = args.slice(1).join(' ');
      if(!reason) reason = "No reason provided";
      await member.kick(reason)
        .catch(error => {
          message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`)
          return;
        });
      message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);
      let memberId = message.mentions.members.first().id
      let server = message.guild.name;
      const warnEmbed = {
        color: 0xFF0000,
        title: `Kick Log:`,
        thumbnail: {
          url: member.user.avatarURL(String)
        },
        fields: [
          {
          name: `Kicked User: ${member.user.tag}`,
          value: `Kick Reason: ${reason}\n User Id: ${memberId}\n Moderator: ${message.author}\n Server: ${server}`
          },
        ],
        timestamp: new Date(),
          footer: {
              text: 'KohBot by MasterKohder6',
              icon_url: 'https://cdn.discordapp.com/avatars/730004103719288904/ce269b42ef41f924bdeb4e3de9d0cb26.png?size=2048',
          },
      };
      client.channels.cache.get("839002657908850688").send({ embed: warnEmbed });
    }
  
  
    if(command === "ban") {
      if(!message.member.roles.cache.some(r=>["Administrator", "Moderator", "↷ admin", "↷ moderators", "・trial"].includes(r.name)) )
        return message.reply("Sorry, you don't have permissions to use this!");
      let member = message.mentions.members.first();
      if(!member)
        return message.reply("Please mention a valid member of this server");
      if(!member.bannable) 
        return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");
      if(member.id === "730004103719288904") return message.reply(botHurtResponses[randomise(11)]);
      if(member.id === message.author.id) return message.reply(userHurtResponses[randomise(6)]);
      let Reason = args.slice(1).join(' ');
      if(!Reason) Reason = "No reason provided";
      
      await member.ban({reason: Reason})
        .catch(error => {
          message.channel.send(`Sorry ${message.author} I couldn't ban because of : ${error}`);
          return;
        });
      message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${Reason}`);
      let memberId = message.mentions.members.first().id
      let server = message.guild.name;
      const warnEmbed = {
        color: 0x000000,
        title: `Ban Log:`,
        thumbnail: {
          url: member.user.avatarURL(String)
        },
        fields: [
          {
          name: `Banned User: ${member.user.tag}`,
          value: `Ban Reason: ${Reason}\n User Id: ${memberId}\n Moderator: ${message.author}\n Server: ${server}`
          },
        ],
        timestamp: new Date(),
          footer: {
              text: 'KohBot by MasterKohder6',
              icon_url: 'https://cdn.discordapp.com/avatars/730004103719288904/ce269b42ef41f924bdeb4e3de9d0cb26.png?size=2048',
          },
      };
      client.channels.cache.get("839002657908850688").send({ embed: warnEmbed });
    }
  

  if(command === "warn"){
    if(!message.member.roles.cache.some(r=>["Administrator", "Moderator", "↷ admin", "↷ moderators", "・trial"].includes(r.name)))
        return message.reply("Sorry, you don't have permissions to use this!");
    let moderator = message.member.user
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
      if(!member){return message.channel.send("Please Specify a Member to Be Warned")}
    
    let memberId = message.mentions.members.first().id
    let reason = args.slice(1).join(' ');
    let server = message.guild.name;
      if(!reason){reason = "No reason provided"};
    
      const warnEmbed = {
        color: 0xFFFF00,
        title: `Warn Log:`,
        thumbnail: {
          url: member.user.avatarURL(String)
        },
        fields: [
          {
          name: `Warned User: ${member.user.tag}`,
          value: `Warn Reason: ${reason}\n User Id: ${memberId}\n Moderator: ${moderator}\n Server: ${server}`
          },
        ],
        timestamp: new Date(),
          footer: {
              text: 'KohBot by MasterKohder6',
              icon_url: 'https://cdn.discordapp.com/avatars/730004103719288904/ce269b42ef41f924bdeb4e3de9d0cb26.png?size=2048',
          },
      };
      client.channels.cache.get("839002657908850688").send({ embed: warnEmbed });
      message.reply(`${member} has been warned.`);
      client.users.cache.get(memberId).send(`You have been warned in ${server} for ${reason}`);
  };
  
  
  if(command === "userstats") {
    const args = message.content.split(' ');
      console.log(args);
      if(args.length > 2) {
        message.channel.send(`Incorrect Usage: k!userstats | k!userstats <user_id> | k!userstats @mention`);
      } else if(args.length === 2) {
        const member = message.mentions.members.size === 1 ? 
          message.mentions.members.first() :
          message.guild.members.cache.get(args[1]);
          let nickname = member ? member.displayName : null;
        if(member) {
          const userEmbed = {
            color: 0xFF69B4,
            title: `${nickname}`,
            thumbnail: {
              url: member.user.avatarURL(String)
            },
            fields: [
              {
                name: "User Created On",
                value: member.user.createdAt.toLocaleString()
              },
              {
                name: "User Joined the Server On",
                value: member.joinedAt
              },
              {
                name: "User Status",
                value: member.presence.status
              }
            ],
          timestamp: new Date(),
          footer: {
              text: 'KohBot by MasterKohder6',
              icon_url: 'https://cdn.discordapp.com/avatars/730004103719288904/ce269b42ef41f924bdeb4e3de9d0cb26.png?size=2048',
          },
          }
          
          message.channel.send({ embed: userEmbed });
        } else {
          message.channel.send(`I couldn't find that member with ID ${args[1]}`);
        }
        
      } else {
        message.channel.send("Include a user id/ping after k!userstats")
  }}
  
  if(command === "poll") {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage).then(messageReaction =>{
        messageReaction.react('👍');
        messageReaction.react('👎'); 
    });
  }

  if(command === "quote"){
    fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      function rng(num){
        return Math.floor (Math.random() * (num - 1 + 1)) + 1;
      }
      const rng1 = rng(1643)
      var author, quote
      quote = `${data[rng1].text}`
      if(data[rng1].author === null) return
       author = `${data[rng1].author}`

      const inviteEmbed = {
      color: 0x9932CC,
      title: "Here's your Quote:",
      description: `${quote} - ${author}`,
      thumbnail: {
          url: 'https://cdn.discordapp.com/attachments/732914068075315271/820960779444551680/1xIxR8PZjbNqBtA-zU9wFYA.png',
      },
      
      timestamp: new Date(),
      footer: {
          text: 'KohBot by MasterKohder6',
          icon_url: 'https://cdn.discordapp.com/avatars/730004103719288904/ce269b42ef41f924bdeb4e3de9d0cb26.png?size=2048',
      },
    };
    message.channel.send({ embed: inviteEmbed });
    });
  }

  if(command === "pong"){
    message.channel.send("Ping! Hey you're supposed to say k!ping !!!")
  }

  if(command === "shiba"){
    fetch(`http://shibe.online/api/shibes`).then(function (response) {
	    // The API call was successful!
	    return response.json();
    }).then(function (data){
      var link = data[0]
      const inviteEmbed = {
        color: 0x9932CC,
        title: "Heres Your Shiba Inu",
        image: {
            url: link,
        },
        
        timestamp: new Date(),
        footer: {
            text: 'KohBot by MasterKohder6',
            icon_url: 'https://cdn.discordapp.com/avatars/730004103719288904/ce269b42ef41f924bdeb4e3de9d0cb26.png?size=2048',
        },
      };
      message.channel.send({ embed: inviteEmbed });
    });
  }

  if(command === "cat"){
    fetch(`https://api.thecatapi.com/v1/images/search`).then(function (response) {
	    // The API call was successful!
	    return response.json();
    }).then(function (data){
      var link = data[0].url
      const inviteEmbed = {
        color: 0x9932CC,
        title: "Heres Your Kitty Cat!",
        image: {
            url: link,
        },
        
        timestamp: new Date(),
        footer: {
            text: 'KohBot by MasterKohder6',
            icon_url: 'https://cdn.discordapp.com/avatars/730004103719288904/ce269b42ef41f924bdeb4e3de9d0cb26.png?size=2048',
        },
      };
      message.channel.send({ embed: inviteEmbed });
    });
  }

  if(command === "birb"){
    fetch(`https://some-random-api.ml/img/birb`).then(function (response) {
	    // The API call was successful!
	    return response.json();
    }).then(function (data){
      var link = data.link
      const inviteEmbed = {
        color: 0x9932CC,
        title: "Heres Your Birb Pic!",
        image: {
            url: link,
        },
        
        timestamp: new Date(),
        footer: {
            text: 'KohBot by MasterKohder6',
            icon_url: 'https://cdn.discordapp.com/avatars/730004103719288904/ce269b42ef41f924bdeb4e3de9d0cb26.png?size=2048',
        },
      };
      message.channel.send({ embed: inviteEmbed });
    });
  }

  if(command === "fact"){
    fetch(`https://uselessfacts.jsph.pl/random.json?language=en`).then(function (response) {
	    // The API call was successful!
	    return response.json();
    }).then(function (data){
      var fact = data.text
      const inviteEmbed = {
        color: 0x000000,
        title: "Did you Know?",
        description: `${fact}`,
        timestamp: new Date(),
        footer: {
            text: 'KohBot by MasterKohder6',
            icon_url: 'https://cdn.discordapp.com/avatars/730004103719288904/ce269b42ef41f924bdeb4e3de9d0cb26.png?size=2048',
        },
      };
      message.channel.send({ embed: inviteEmbed });
    });
  }

  if(command === "ship"){
    const args = message.content.split(' ');
    var person1 = args[1];
    var person2 = args[2];
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${person1}&sname=${person2}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "1c5b48d8cdmsh70098e9ec1b7eeap1dc730jsnb2f3060f371e",
        "x-rapidapi-host": "love-calculator.p.rapidapi.com"
	    }
    }).then(function (response) {
	    // The API call was successful!
	    return response.json();
    }).then(function (data){
      var messageItem = data.result;
      var percentages = data.percentage;
      if(percentages < 10){
        var emoji = ":flushed: :flushed: "
      } else if(percentages < 25){
        var emoji = ":face_vomiting: :face_vomiting:"
      } else if(percentages < 50){
        var emoji = " :smiling_face_with_3_hearts:"
      } else if(percentages < 75){
        var emoji = " :smiling_face_with_3_hearts: :kissing_heart: "
      } else if(percentages < 90){
        var emoji = ":heart_eyes: :heart_eyes: "
      } else if(percentages <= 100){
        var emoji = ":heart_eyes: :star_struck:"
      }
      const inviteEmbed = {
        color: 0xF9E3EF,
        title: `${person1} and ${person2} are ${percentages}% compatible ${emoji}`,
        description: `${messageItem}`,
        
        timestamp: new Date(),
        footer: {
            text: 'KohBot by MasterKohder6',
            icon_url: 'https://cdn.discordapp.com/avatars/730004103719288904/ce269b42ef41f924bdeb4e3de9d0cb26.png?size=2048',
        }
      };
      message.channel.send({ embed: inviteEmbed });
    })
  }

  if(command === "whatarechances"){
    const args = message.content.split(' ');
    var eventItem
    args.forEach(element => {
      var eventItem = eventItem + element;
    });
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${element}&sname=${"chances"}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "1c5b48d8cdmsh70098e9ec1b7eeap1dc730jsnb2f3060f371e",
        "x-rapidapi-host": "love-calculator.p.rapidapi.com"
	    }
    }).then(function (response) {
	    // The API call was successful!
	    return response.json();
    }).then(function (data){
      var percentages = data.percentage;

      const inviteEmbed = {
        color: 0xF9E3EF,
        title: `The chances of ${element} happening is:`,
        description: `${percentages}%`,
        
        timestamp: new Date(),
        footer: {
            text: 'KohBot by MasterKohder6',
            icon_url: 'https://cdn.discordapp.com/avatars/730004103719288904/ce269b42ef41f924bdeb4e3de9d0cb26.png?size=2048',
        }
      };
      message.channel.send({ embed: inviteEmbed });
    })
  }


  if(command === "meme"){
    fetch(`https://some-random-api.ml/meme`).then(function (response) {
	    // The API call was successful!
	    return response.json();
    }).then(function (data){
      var link = data.image
      var caption = data.caption
      const inviteEmbed = {
        color: 0x9932CC,
        title: caption,
        image: {
            url: link,
        },
        
        timestamp: new Date(),
        footer: {
            text: 'KohBot by MasterKohder6',
            icon_url: 'https://cdn.discordapp.com/avatars/730004103719288904/ce269b42ef41f924bdeb4e3de9d0cb26.png?size=2048',
        },
      };
      message.channel.send({ embed: inviteEmbed });
    });
  }


  if(command === "bubblesort"){
    const args = message.content.split(' ');
    var numArgs = args
    numArgs[0] = null;
    var numArgs = numArgs.map(Number);
    var Last = numArgs.length;
    var Swapped = true;
    while(Swapped){
      Swapped = false;
      var i = 1;
      while(i <= Last){
        if(numArgs[i] > numArgs[i + 1]){
          var Temp = numArgs[i];
          numArgs[i] = numArgs[i + 1];
          numArgs[i + 1] = Temp;
          Swapped = true
        }
        i++
      }
    }
    var sortedArgs = numArgs.join(" ");
    message.reply(`Here's Your Sorted Numbers, using Bubble Sort: ${sortedArgs}`);
  }

  if(command === "insertionsort"){
    var numArgs = message.content.split(' ')
    numArgs[0] = null;
    var Name = numArgs.map(Number);

    let First = 1;
    let Last = Name.length;
    let PositionOfNext = Last - 1;
    while(PositionOfNext >= First){
      let Next = Name[PositionOfNext];
      let Current = PositionOfNext;
      while(Current < Last && Next > Name[Current + 1]){
        Current++;
        Name[Current - 1] = Name[Current];
      }
      Name[Current] = Next;
      PositionOfNext--;
    }

    var sortedName = Name.join(" ");
    message.reply(`Here's Your Sorted Numbers, using Insertion Sort: ${sortedName}`);
  }

  if(command === "selectionsort"){
    var numArgs = message.content.split(' ')
    numArgs[0] = null;
    var Name = numArgs.map(Number);
    
    var EndUnsorted = Name.length;
    while(EndUnsorted > 1){
      var i = 1;
      var Max = Name[i];
      var PosMax = i;
      while(i <= EndUnsorted){
        i++;
        if(Name[i] > Max){
          Max = Name[i];
          PosMax = i;
        }
      }
      var Temp = Name[PosMax];
      Name[PosMax] = Name[EndUnsorted];
      Name[EndUnsorted] = Temp;
      EndUnsorted--;
    }

    var sortedName = Name.join(" ");
    message.reply(`Here's Your Sorted Numbers, using Selection Sort: ${sortedName}`);
  }

  if(command === "mute"){
    if(!message.member.roles.cache.some(r=>[ "Administrator", "Moderator", "↷ admin", "↷ moderators", "・trial"].includes(r.name)) )
        return message.reply("Sorry, you don't have permissions to use this!");
    const Role = "832580239061549126";
    let member = message.mentions.members.first();
    let memberId = message.mentions.members.first().id
    let server = message.guild.name;
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided!"
    if(!member) return message.channel.send("Please specify member to be muted.")
    if(member.id === "730004103719288904") return message.reply(botHurtResponses[randomise(11)]);
    if(member.id === message.author.id) return message.reply(userHurtResponses[randomise(6)]);
    if(member.roles.cache.some(r=>[ "Muted"].includes(r.name)) )
        return message.reply(" give it a rest. My man is already muted. Why don't you try k!unmute");
    member.roles.add(Role);

    const warnEmbed = {
      color: 0xFFA500,
      title: `Mute Log:`,
      thumbnail: {
        url: member.user.avatarURL(String)
      },
      fields: [
        {
        name: `Muted User: ${member.user.tag}`,
        value: `Warn Reason: ${reason}\n User Id: ${memberId}\n Moderator: ${message.author}\n Server: ${server}`
        },
      ],
      timestamp: new Date(),
        footer: {
            text: 'KohBot by MasterKohder6',
            icon_url: 'https://cdn.discordapp.com/avatars/730004103719288904/ce269b42ef41f924bdeb4e3de9d0cb26.png?size=2048',
        },
    };
    client.channels.cache.get("839002657908850688").send({ embed: warnEmbed });
    client.users.cache.get(memberId).send(`You have been muted in ${server} for ${reason}`);
    message.reply(`${member} is now muted.`);
  }

  if(command === "unmute"){
    if(!message.member.roles.cache.some(r=>[ "Administrator", "Moderator", "↷ admin", "↷ moderators", "・trial"].includes(r.name)) )
        return message.reply("Sorry, you don't have permissions to use this!");
    const Role = "832580239061549126";
    let member = message.mentions.members.first();
    if(member.id === message.author.id) return message.reply("Nice Try Buddy.");
    let memberId = message.mentions.members.first().id
    let server = message.guild.name;
    if(!member) return message.channel.send("Please specify member to be unmuted.")
    if(!member.roles.cache.some(r=>[ "Muted"].includes(r.name)) )
        return message.reply(" the user you are trying to unmute is already unmuted! You can't give double the privileges to speak...");
    member.roles.remove(Role);
    const warnEmbed = {
      color: 0x00FF00,
      title: `Unmute Log:`,
      thumbnail: {
        url: member.user.avatarURL(String)
      },
      fields: [
        {
        name: `Unmuted User: ${member.user.tag}`,
        value: `User Id: ${memberId}\n Moderator: ${message.author}\n Server: ${server}`
        },
      ],
      timestamp: new Date(),
        footer: {
            text: 'KohBot by MasterKohder6',
            icon_url: 'https://cdn.discordapp.com/avatars/730004103719288904/ce269b42ef41f924bdeb4e3de9d0cb26.png?size=2048',
        },
    };
    client.channels.cache.get("839002657908850688").send({ embed: warnEmbed });
    message.reply(`${member} is now unmuted.`);
  }

  if(command === "avatar"){
    const args = message.content.split(' ');
      console.log(args);
      if(args.length > 2) {
        message.channel.send(`Incorrect Usage: k!avatar | !avatar <user_id> | !avatar @mention`);
      } else if(args.length === 2) {
        const member = message.mentions.members.size === 1 ? 
          message.mentions.members.first() :
          message.guild.members.cache.get(args[1]);
          let nickname = member ? member.displayName : null;
        if(!member) member = message.author
        if(member) {
          const userEmbed = {
            color: 0xFF69B4,
            title: `${nickname}'s Avatar`,
            thumbnail: {
              url: member.user.avatarURL(String)
            },
            fields: [
              {
                name: member.user.avatarURL(String),
              }
            ],
          timestamp: new Date(),
          footer: {
              text: 'KohBot by MasterKohder6',
              icon_url: 'https://cdn.discordapp.com/avatars/730004103719288904/ce269b42ef41f924bdeb4e3de9d0cb26.png?size=2048',
          },
          }
          
          message.channel.send({ embed: userEmbed });
        } else {
          message.channel.send(`I couldn't find that member with ID ${args[1]}`);
        }
        
      }
  }

  if(command === "snipe"){
    if(!savedMessage){
      message.reply("Theres nothing to snipe!");
      return;
    }
    const userEmbed = {
      color: 0xFF69B4,
      title: `${message.author.username} Deleted Message:`,
      thumbnail: {
        url: messageAuthor.avatarURL(String)
      },
      fields: [
        {
          name: savedMessage,
          value: "",
        }
      ],
    timestamp: new Date(),
    footer: {
        text: 'KohBot by MasterKohder6',
        icon_url: '',
    },
    }
    
    message.channel.send({ embed: userEmbed });

  }

});

//Client Login
client.login(token);