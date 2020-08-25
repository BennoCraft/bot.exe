const path = require("path");
const cwd = process.cwd();
const { save, load, file } = require(path.join(cwd, "database", "index.js"));
const permissions = file([cwd, "utils", "permissions.json"]);
const errors = file([cwd, "utils", "errors.json"]);

module.exports = {
    permission: permissions.member,
    code: async (msg, argstring, config) => {
        msg.delete().catch((e) => {});    
        const addition = argstring == "" ? "" : "**: " + argstring + "**";
        return "✨👄👀" + addition;
    },
    help: `
    Usage: alien (message)
    
    Summons a cute alien, which can optionally say a message.
    `
}