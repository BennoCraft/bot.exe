
const path = require("path");
const cwd = process.cwd();
const { save, load, file } = require(path.join(cwd, "database", "index.js"));
const isint = require(path.join(cwd, "utils", "isint.js"));
const permissions = file([cwd, "utils", "permissions.json"]);
const errors = file([cwd, "utils", "errors.json"]);

module.exports = {
    permission: permissions.moderator,
    code: async (msg, argstring, config) => {
        
        if (!isint(argstring)) throw errors.syntax;
        
        msg.channel.bulkDelete(argstring).catch(() => {
            throw errors.botperms;
        });
    },
    help: ``
}
