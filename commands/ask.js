const path = require("path");
const cwd = process.cwd();
const { save, load, file } = require(path.join(cwd, "database", "index.js"));
const permissions = file([cwd, "utils", "permissions.json"]);

module.exports = {
    help: ``,
    permission: permissions.member,
    code: async (msg, argstring, config) => {
        msg.channel.send("https://dontasktoask.com/");
    }
}