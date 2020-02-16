const prompt = require('inquirer').createPromptModule()
const Employee = require("./lib/Employee.js")
const Engineer = require('./lib/Engineer.js')
const Intern = require('./lib/Intern.js')
const Manager = require('./lib/Manager.js')

let team = []
let person
const init = async _ =>{
  let {managerName} = await prompt([
    {
      type: 'input',
      name: 'managerName',
      message: 'Welcome to the Team Builder! What is the name of the team manager?'
    }
  ])
  console.log(managerName)
  let {managerID, managerEmail, managerPhone} = await prompt([
    {
      type: 'number',
      name: 'managerID',
      message: `What is ${managerName}'s ID number?`
    },
    {
      type: 'input',
      name: 'managerEmail',
      message: `What is ${managerName}'s email address?`
    },
    //validate phone number by inquirer
    // {
    //   type: 'input',
    //   name: 'managerPhone',
    //   message: "What's your phone number?",
    //   validate: function (value) {
    //     var pass = value.match(
    //       /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
    //     )
    //     if (pass) {
    //       return true
    //     }

    //     return 'Please enter a valid phone number'
    //   }
    // }
    {
      type: 'input',
      name: 'managerPhone',
      message: `What is ${managerName}'s phone number?`
    }
  ])
  person = new Manager(managerName, managerID, managerEmail, managerPhone)
  console.log(team)
  
  
}

const getTeamMembers = async _ => {
  let members = []
  let engineerNames = []
  let
    let { engineerSize } = await prompt([
      {
        input: 'number',
        name: 'engineerSize',
        message: 'How many Engineers do you have on your team?',
      }
    ])
    getEngineerInfo(engineerSize)
    //populating the engineerNames array
  }
  return members
}



init()
