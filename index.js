// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "username",
        message: "What is your GitHun username?",
        validate: (value)=>{ if(value){return true} else {return 'I need an input to continue'}}
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?",
        validate: (value)=>{ if(value){return true} else {return 'I need an input to continue'}}
      },
      {
        type: "input",
        name: "project",
        message: "What is your project's name?",
        validate: (value)=>{ if(value){return true} else {return 'I need an input to continue'}}
      },
      {
        type: "input",
        name: "description",
        message: "Please write a short description of your project.",
        validate: (value)=>{ if(value){return true} else {return 'I need an input to continue'}}
      },
      {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["MIT", "GPL", "Apache", "GNU", "N/A"],
        validate: (value)=>{ if(value){return true} else {return 'I need an input to continue'}}
      },
      {
        type: "input",
        name: "dependencies",
        message: "What command should be run to install dependencies?",
        validate: (value)=>{ if(value){return true} else {return 'I need an input to continue'}}
      },
      {
        type: "input",
        name: "tests",
        message: "What command should be run to run tests?",
        validate: (value)=>{ if(value){return true} else {return 'I need an input to continue'}}
      },
      {
        type: "input",
        name: "using repo",
        message: "What does the user need to know about using the repo?",
        validate: (value)=>{ if(value){return true} else {return 'I need an input to continue'}}
      },
      {
        type: "input",
        name: "constibuting repo",
        message: "What does the user need to know about contributing to the repo?",
        validate: (value)=>{ if(value){return true} else {return 'I need an input to continue'}}
      }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}
const writeFileAsync = util.promisify(fs.writeFile);

writeFileAsync("README.md", markdown)
// writeFileAsync is promise-based, so we use .then() instead of a callback!
    .then(() => console.log("Success!"))
    .catch(err => console.error(err));

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response)=> {

    })
}

// Function call to initialize app
init();