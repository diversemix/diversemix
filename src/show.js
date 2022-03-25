import fs from 'fs';
import chalk from 'chalk';

export default function show(template) {
    try {
        process.stdout.write(fs.readFileSync(`templates/show/${template}`));
    } catch(err) {
        // console.error(err);
        console.error(`Could not find template: ${chalk.red.bold(template)}`);
    }   
}
