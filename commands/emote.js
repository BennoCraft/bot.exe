const path = require("path");
const cwd = process.cwd();
const { save, load, file } = require(path.join(cwd, "database", "index.js"));
const permissions = file([cwd, "utils", "permissions.json"]);
const errors = file([cwd, "utils", "errors.json"]);

module.exports = {
    permission: permissions.member,
    code: async (msg, argstring, config) => {
        let match = argstring.match(/<[:a-zA-Z:0-9]+>/);
        if (match) {
            const emote = match[0];
            const id = emote.split(":")[2].slice(0, -1);
            const url = `https://cdn.discordapp.com/emojis/${id}.png`;
            msg.channel.send(url);
        } else {
            throw errors.syntax;
        }
    },
    help: `
    Usage: \`emote [discord server custom emote]\`.
    
    This will not work with unicode or default discord emotes.
    `
}