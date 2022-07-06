const { resolve } = require('path')
const { copy } = require('fs-extra')
const normalize = require('normalize-path')
const { green, cyan, red } = require('chalk')

module.exports = async (options) => {
  let jsonFile
  try {
    jsonFile = require(resolve(process.cwd(), options.config))
  } catch (error) {
    console.log(red(`Error`))
    console.log(cyan(`   "${options.config}" file dosn't exist.`))
    return
  }

  console.log(green('Starting to copy vendor files...'))

  Object.entries(jsonFile.vendors).forEach((entry) => {
    console.log(cyan(entry[0]))
    Object.values(entry[1]).forEach((path) => {
      copy(normalize(path.from), normalize(path.to))
    })
    console.log(green('Done.'))
  })

  console.log(green('All vendor files copied.'))
}
