import yargs from 'yargs';
import show from './show.js';

export function cli() {
    const cmdArgs = yargs
    .command('show', 'Shows a particular template', {
        template: {
            description: 'the template to use',
            alias: 't',
            type: 'string'
        }
    })
    .option('git', {
        alias: 'g',
        description: 'Initialise a git repository',
        type: 'boolean'
    })
    .help()
    .alias('help', 'h').argv;

    if (cmdArgs._.includes('show')) {
        show(cmdArgs.template);
    }

}
