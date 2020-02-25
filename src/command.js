const clc  = require('cli-color');
const { Arr } = require('@rhinojs/support');

class Command
{
    /**
     * Construtor.
     * @param {String} cmd Definicao do comando
     * @param {String} desc Descricao do comando para o help
     */
    constructor(cmd, desc)
    {
        this.cmd = cmd;
        this.desc = desc;
        this.params = {};
    }

    /**
     * Registrar o comando no gerenciador de comandos.
     * @param {Object} yargs Objeto Yargs para registrar o comando
     */
    registerClient(yargs)
    {
        const obj = this;

        // Registrar
        yargs.command({
            command: this.cmd,
            desc: this.desc,
            handler: (argv) => {
                obj.handlerCommand(argv);                
            }
        });
    }

    /**
     * Funcao do comando a ser executado.
     */
    run()
    {
        throw new Error("Command [run] nao implementado");
    }

    /**
     * Controlador da execucao do comando.
     * @param {Object} argv Argumentos passados
     */
    handlerCommand(argv)
    {
        try {
            this.params = argv;
    
            this.run();
        } catch (e) {
            this.error(e);
        }
    }

    /**
     * Retorna um argumento passado.
     * @param {String} key Nome da argumento
     * @param {Any} def Valor padrao quando nao encontrado
     * @returns {Any}
     */
    argument(key, def = null)
    {
        return Arr.get(this.params, key, def);
    }

    /**
     * Verifica se argumento foi passado.   
     * @param {String} key Nome do argumento
     * @returns {Boolean}
     */
    hasArgument(key)
    {
        return Arr.exists(this.params, key);
    }

    /**
     * Output log.
     */
    log()
    {
        console.log.apply(this, arguments);
    }

    /**
     * Output info.
     * @param {String} message Mensagem de log
     */
    info(message)
    {
        this.log(clc.cyan(message));
    }

    /**
     * Output warn.
     * @param {String} message Mensagem de log
     */
    warn(message)
    {
        this.log(clc.yellow(message));        
    }

    /**
     * Output error.
     * @param {String} message Mensagem de log
     */
    error(message)
    {
        this.log(clc.red(message));        
    }

    /**
     * Output alert.
     * @param {String} message Mensagem de log
     */
    alert(message)
    {
        this.log(clc.green(message));
    }
}

module.exports = Command;