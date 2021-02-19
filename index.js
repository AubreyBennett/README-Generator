// Packages
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const generateMarkdown = require('./utils/generateMarkdown.js');

// Input Prompt Questions
const questions = [
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
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
        name: "title",
        message: "What is your project's title?",
        validate: (value)=>{ if(value){return true} else {return 'I need an input to continue'}}
      },
      {
        type: "input",
        name: "url",
        message: "What is the URL to the repository?",
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
        name: "usage",
        message: "What does the user need to know about using the repo?",
        validate: (value)=>{ if(value){return true} else {return 'I need an input to continue'}}
      },
      {
        type: "input",
        name: "contributing",
        message: "What does the user need to know about contributing to the repo?",
        validate: (value)=>{ if(value){return true} else {return 'I need an input to continue'}}
      },
      {
        type: "input",
        name: "link",
        message: "Paste a link to a video demonstration of your project.",
        validate: (value)=>{ if(value){return true} else {return 'I need an input to continue'}}
      }
];

const writeFileAsync = util.promisify(fs.writeFile);

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((answers)=> {
      const readMe = generateMarkdown(answers);

      return writeFileAsync("README.md", readMe)
    })
    .then(() => console.log("Success!"))
    .catch(err => console.error(err));
}

// Function call to initialize app
init();
