const yargs   = require('yargs');
const Command = require('./command');
//const clc  = require('cli-color');


class Console
{
    constructor()
    {
        this.cli = yargs;
        this.cli.help();
        this.cli.version();
        this.cli.wrap(yargs.terminalWidth());
        this.cli.strict();
    }

    /**
     * Executa os comando do console.
     */
    run()
    {
        // Verificar se deve exibir o help
        if (!this.cli.argv._[0]) {
            this.cli.showHelp();
        }
    }

    /**
     * Registra um comando no console.
     * 
     * @param {Command} cmd Definicao do comando
     */
    command(cmd)
    {
        cmd.registerClient(this.cli);

        return true;
    }
}

module.exports = {
    Console,
    Command,
};