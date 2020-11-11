#!/usr/bin/env node

const fs = require('fs-extra')
const { Command } = require('commander')
const program = new Command()

const defaultTemplatesPath = './.splt/'

program
  .command('put <destinationPath> <templatePath> [name]')
  .description('Copy component template')
  .action((destinationPath, templatePath, name) => {
    const fullTemplatePath = defaultTemplatesPath + templatePath
    const templateName = fullTemplatePath.split('/').slice(-1)
    
    fs.copy(fullTemplatePath, `${destinationPath}/${name || templateName}`)
  })

program.parse(process.argv)