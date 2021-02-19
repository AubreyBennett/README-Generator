// Function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answers.title}

  ## Table of Contents

  -[Description](#desctiption)

  -[URL](#url)

  -[Installation](#dependencies)

  -[Usage](#usage)

  -[License](#license)

  -[Contributing](#contributing)

  -[Tests](#tests)

  -[Questions](#questions)

  ## Description:
  ![License](https://img.shields.io/badge/License-${answers.license}-blue.svg "License Badge")

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
    If you have any questions concerning the README-Generator feel free to visit my GitHub Page.

  -[GitHub Page](https://github.com/${answers.username})

    You can also reach out to me at my email: ${answers.email}.
`;
}

module.exports = generateMarkdown;
