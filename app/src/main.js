/* eslint no-undef: off */
import Controller from './controller'
const cli = require('commander')
const chalk = require('chalk')

cli
  .version('1.0.0')
  .option('-t, --target <n>', 'Path of the target directory')
  .usage('[options] <package> [morePackage ...]')
  .parse(process.argv)

let path = cli.target !== undefined ? cli.target : process.cwd()

let controller = new Controller(path, cli.args)

console.log(chalk.gray('\nKEEP CALM!\nNSI GOT YOU COVERED'))
controller.run()
