// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${answers.title}

  #Table of Contents

  -[Description](#desctiption)
  -[URL](#url)
  -[Command to Install Dependencies](#dependencies)
  -[Tests](#tests)
  -[License](#license)
  -[Usage](#usage)
  -[Contributing](#contributing)
  -[Questions](#questions)

  ## Description:
  // insert license image

    ${answers.description}
  ## URL:
    ${answers.url}
  ## Command to Install Dependencies:
    ${answers.dependencies}
  ## Tests:
    ${answers.tests}
  ## License:
    For more information about the license, click on the link below:
  - [License](https://opensource.org/;icenses/${answers.license})
  ## Usage:
    ${answers.usage}
  ## Contributing:
    ${answers.contributing}
  ## Questions:
    If you have any questions concerning the README-Generator feel free to contact me or visit my GitHub Page.
  -[Personal Email] ${answers.email}
  -[GitHub Page](https://github.com/${answers.username})
`;
}

module.exports = generateMarkdown;
