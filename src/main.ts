const program = require('commander')
const pkg = require('../package.json')

import create from './create'
const command = {
    create,
}
type commandType = keyof typeof command

function exec(type: commandType, ...args: any[]): void {
    command[type](...args)
}

program.version(`${pkg.version}`, '-V, --version', 'output the current version')

program.description('@lm 的 脚手架工具')

program.usage('<command> [options]')

program
    .command('create [something]')
    .description('console.log something')
    .action((...args: any[]) => exec('create', ...args))

program.parse(process.argv)
