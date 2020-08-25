const fs = require("fs");
const path = require("path");
const cwd = process.cwd();
const { save, load, file } = require(path.join(cwd, "database", "index.js"));
const permissions = file([cwd, "utils", "permissions.json"]);
const errors = file([cwd, "utils", "errors.json"]);

module.exports = {
    permission: permissions.member,
    code: async (msg, argstring, config) => {
        const starttext = `
            All commands prefixed with ${config.prefix}, without additional spaces.

            Available commands:

            `;

        if (argstring == "") {
            let commands = fs
                .readdirSync(path.join(cwd, "commands"))
                .filter(
                    (command) =>
                        !config.blocklist.some((blockedcommand) =>
                            command.includes(blockedcommand)
                        )
                )
                .join("\n")
                .replace(/.js/g, "");
                
            return starttext + commands;
        } else {
            const commandpath = path.join(cwd, "commands", argstring + ".js");
            if (!fs.existsSync(commandpath)) return `Command "${argstring}" doesn't exist.`;
            const command = require(commandpath)
            const body = command.help;
            if (body == "") return `No help page found for "${argstring}".`;

            const permissiontexts = [
                "Anyone can use",
                "Trialadmin or higher",
                "Moderator or higher",
                "Sysadmin only"
            ];

            return `
                Permission level: ${permissiontexts[command.permission]}

                ${command.help}
            `;
        }

    },
    help: `
    Usage: \`help (command)\`.
    
    Returns a list of available command if no arguments given, Returns the help page of a specific command if an argument is given, for an existing command which is enabled in the server it's requested from.
    `
}
