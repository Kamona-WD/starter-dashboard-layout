#!/usr/bin/env node
const { Command } = require('commander')
const { version, name } = require('../package.json')
const buildHtml = require('./html')
const buildJS = require('./js')
const serve = require('./serve')
const vendor = require('./vendor')

const program = new Command(name)

program.version(version)

program
  .command('html')
  .option('-r, --root <root>', 'Root of `Edge` files', 'src/html')
  .option('-i, --input <input...>', 'Input patterns', ['**/*.edge'])
  .option('-o, --output <output>', 'Output directory', 'public')
  .option('-d, --data-path <data>', 'Global data `relative to root`', 'data/data.js')
  .option('-w, --watch', 'Watch files')
  .option('-a, --all-in-output', 'Reserve nested structure', false)
  .option('-s, --skip <skip...>', 'Patterns to skip', ['**/layouts/**', '**/components/**', '**/partials/**'])
  .description('Compile `Edge` files to html')
  .action(buildHtml)

program
  .command('js')
  .option('-r, --root <root>', 'Root of `js` files', 'src/js')
  .option('-i, --input <input...>', 'Entry points', ['*.js'])
  .option('-o, --output <output>', 'Output dir', 'public/assets/js')
  .option('-w, --watch', 'Watch files')
  .option('-s, --skip <skip...>', 'Patterns to skip', [])
  .option('-x, --external <external...>', 'File or a package as external to exclude it from your build', ['alpinejs'])
  .description('Build javascript')
  .action(buildJS)

program
  .command('vendor')
  .option('-c, --config', 'Path to config file', 'src/vendor/vendor.json')
  .description('Copy vendor files from `node_modules` to `public` directory.')
  .action(vendor)

program
  .command('serve')
  .option('-d, --dest <dest>', 'dest dir', 'public')
  .option('-i, --index <index>', 'Specify which file should be used as the index page', 'index.html')
  .option('-w, --watch', 'Watch files')
  .description('Serve')
  .action(serve)

program.parse(process.argv)
