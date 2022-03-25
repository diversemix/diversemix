import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

export default function show(template) {
    try {
        const templatePath = path.resolve(
            new URL(import.meta.url).pathname,
            '../../templates'
        );
        process.stdout.write(fs.readFileSync(`${templatePath}/show/${template}`));
    } catch(err) {
        console.error(err);
        console.error(`Could not find template: ${chalk.red.bold(template)}`);
    }   
}
