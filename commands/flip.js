const path = require("path");
const cwd = process.cwd();
const { save, load, file } = require(path.join(cwd, "database", "index.js"));
const permissions = file([cwd, "utils", "permissions.json"]);
const errors = file([cwd, "utils", "errors.json"]);

module.exports = {
    permission: permissions.member,
    code: async (msg, argstring, config) => Math.random() < 0.5,
    help: `
    "Flips a coin".
    
    Has a 50% chance of returning \`true\`, returns \`false\` otherwise.
    `
}
