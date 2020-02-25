# rhinoJS | Console
Desenvolvimento de comandos para console.

## Configurando
Para utilizar o rhino console, antes deve ser instalado o pacote

```bash
npm install @rhinojs/console --save
```

Após a instalação, deve ser configurado o arquivo cmd na pasta root do projeto, conforme o arquivo abaixo:

```javascript
#!/usr/bin/env node

const { Console } = require('@rhinojs/console');

const cmd = new Console();

// Registrar comandos aqui...
//cmd.command(new MeuCommand());

cmd.run();
```

## Escrevendo um comando

Para escrever um comando, pode ser feito conforme o exemplo abaixo:

```javascript
const { Command } = require('@rhinojs/console');

class MeuCommand extends Command
{
    constructor()
    {
        super('diga:ola <nome>', 'Diga ola para o nome');
    }

    run()
    {
        this.info("Ola : " + this.argument('nome', '???'));
    }
}
```

## Executando o comando

Para executar o comando, na pasta root, execute o comando abaixo, conforme nosso comando exemplo:

```bash
node cmd diga:ola MeuNome
```