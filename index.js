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
      name: "name",
      message: "What is your name?",
    },
    {
      type: "input",
      name: "location",
      message: "Where are you from?",
    },
    {
      type: "input",
      name: "hobby",
      message: "What is your favorite hobby?",
    },
    {
      type: "input",
      name: "food",
      message: "What is your favorite food?",
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username",
    },
    {
      type: "input",
      name: "linkedin",
      message: "Enter your LinkedIn URL.",
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
