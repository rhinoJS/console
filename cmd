#!/usr/bin/env node

const { Console, Command } = require('./src');

class OiCommand extends Command
{
    constructor()
    {
        super('oi <nome>', 'Diga oi');
    }

    run()
    {
        this.info("Ola info: " + this.argument('nome', '???'));
    }
}

const cmd = new Console();

cmd.command(new OiCommand());

cmd.run();