const yargs   = require('yargs');
const Command = require('./command');
const EventEmitter = require('events');

class Console
{
    constructor()
    {
        // Eventos
        this.events = new EventEmitter();

        // Yargs
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
        cmd.registerClient(this);

        return true;
    }

    /**
     * Registrar um evento.
     * 
     * @param {String} event ID do evento
     * @param {Function} callback Callback do evento
     */
    on(event, callback) {
        this.events.on(event, callback);
    }
}

module.exports = Console;