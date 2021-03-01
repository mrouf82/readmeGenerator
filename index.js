// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
//file that contains the markdown of the readMe user will create
const createReadme = require("./utils/generateMarkdown");
//Array of questions for user input
const questions = () =>
  inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is your project name?",
    },
    {
      type: "input",
      name: "description",
      message: "Provide a description of your job",
    },
    {
      type: "input",
      name: "instruction",
      message: "Provide instructions to install your project",
    },
    {
      type: "input",
      name: "usage",
      message: "Please provide a description of the usage of your project",
    },
    {
      type: "input",
      name: "dependencies",
      message: "Please provide instruction to install dependencies.",
    },
    {
      type: "list",
      name: "license",
      message: "What licenses are you using?",
      choices: [
        "Apache",
        "IBM",
        "GNU General Public",
        "Eclipse Public",
        "MIT",
        "Mozilla Public",
        "None",
      ],
    },
    {
      type: "input",
      name: "contribution",
      message: "Please provide contribution guidelines for this provider",
    },
    {
      type: "input",
      name: "githubUsername",
      message: "Please provide your github username",
    },
    {
      type: "input",
      name: "email",
      message: "Please provide your email.",
    },
  ]);

// TODO: Create a function to initialize app
function init() {
  questions().then((answers) => {
    try {
      const md = createReadme(answers);
      fs.writeFileSync("./Example/README.md", md);
      console.log("Successfully created README");
    } catch (error) {
      console.log(error);
    }
  });
}

// Function call to initialize app
init();
