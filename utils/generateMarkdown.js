// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(answers) {
  let licenseBadge = " ";
  switch (answers.license) {
    case "Apache":
      licenseBadge =
        "![badge](https://img.shields.io/badge/license-Apache-blueviolet)";
      break;
    case "IBM":
      licenseBadge =
        "![badge](https://img.shields.io/badge/license-IBM-blueviolet)";
      break;
    case "GNU General Public":
      licenseBadge =
        "![badge](https://img.shields.io/badge/License-GPL%20v3-blue)";
      break;
    case "Eclipse Public":
      licenseBadge =
        "![badge](https://img.shields.io/badge/License-EPL%201.0-red)";
      break;
    case "MIT":
      licenseBadge =
        "![badge](https://img.shields.io/badge/license-MIT-blueviolet)";
      break;
    case "Mozilla Public":
      licenseBadge =
        "![badge](https://img.shields.io/badge/License-MPL%202.0-brightgreen)";
      break;
    case "None":
      licenseBadge = " ";
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(answers) {
  let licenseLink = " ";
  switch (answers.license) {
    case "Apache":
      licenseLink = "[Apache](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "IBM":
      licenseLink = "[IBM](https://spdx.org/licenses/IPL-1.0.html)";
      break;
    case "GNU General Public":
      licenseLink =
        "[GNU General Public V.3.0](http://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "Eclipse Public":
      licenseLink = "[Eciplse Public](https://opensource.org/licenses/EPL-1.0)";
      break;
    case "MIT":
      licenseLink = "[MIT](https://opensource.org/licenses/MIT)";
      break;
    case "Mozilla Public":
      licenseLink = "[Mozilla Public](https://opensource.org/licenses/MPL-2.0)";
      break;
    case "None":
      licenseLink = " ";
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(answers) {
  if (answers.license !== "None") {
    return `## License  
   ${renderLicenseBadge(answers)}
 License Link :  ${renderLicenseLink(answers)}`;
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  let license1 = renderLicenseSection(answers);
  let readMeTemplate = `
  ## ${answers.title} 
    
  ## Description
  ${answers.description}
  
  ## Table of Contents
  [Installation](#installation)
  [Usage](#usage)
  [License](#license)
  [Contribution](#contribution)
  [Questions](#questions)

  ## Installation
  
  To install the necessary dependencies, please run this code.
  \`\`\`
  ${answers.instruction}
  \`\`\`
  
  ## Usage
  \`\`\`
  ${answers.usage}
  \`\`\`
  ## License
  
  The license of this project is ${answers.license}
  ${license1}
  

  ## Contribution 
  ${answers.contribution}
  ## Questions
   Github: [${answers.githubUsername}](https://github.com/${answers.githubUsername})\n
  If you have any questions, please contact me at: ${answers.email}
  `;
  return readMeTemplate;
}

module.exports = generateMarkdown;
