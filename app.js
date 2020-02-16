const prompt = require('inquirer').createPromptModule()
const Employee = require("./lib/Employee.js")
const Engineer = require('./lib/Engineer.js')
const Intern = require('./lib/Intern.js')
const Manager = require('./lib/Manager.js')

const init = async function (){
  let {size} = await prompt([
    {
      type: 'input',
      name: 'size',
      message: 'Welcome to the Team Builder! How big is your team?'
    }
  ])
  console.log(size)
}

init()
