const fs = require("fs");
const path = require("path");
const cwd = process.cwd();
const { save, load, file } = require(path.join(cwd, "database", "index.js"));
const permissions = file([cwd, "utils", "permissions.json"]);

const cwd = process.cwd();

const emojis = JSON.parse(fs.readFileSync(path.join(cwd, "assets", "emoji.json")).toString());

function getEmoji(keyword, maxemoji) {
    let candidates = emojis.filter(
        (entry) => entry[1].join(" ").indexOf(keyword.toLowerCase()) >= 0
    );
    
    if (candidates.length > 0) {
        let a = "";
        for (let i = 0; i < maxemoji && i < candidates.length; i++)
            a += candidates[i][0];
        return a + " ";
    } else return " ";
}
// TODO prevent errors on incorrect input
module.exports = {
    permission: permissions.member,
    code: async (msg, argstring, config) => {
        let args = argstring.split(" ");
            msg.channel.send(args
                .slice(1)
                .map((word) => word + getEmoji(word, args[0]))
                .join("")
            ).catch((e) => msg.channel.send("Message too long!"))
    },
    help: `
    Usage: \`emoji [maximum amount of emoji per word] [text to put emojis in]\`.
    
    Note that too long messages with too much emojis will not be returned, as per discord character limit.
    `
}
