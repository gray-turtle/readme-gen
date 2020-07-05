// function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answers.title}

  ## ${answers.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#constribution)
  * [tests](#tests)
  * [License](#license)
  * [Questions](#questions)
  
  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## Contribution
  ${answers.contribution}

  ## License
  ${answers.license}

  ## Questions
  Please direct all questions to:
  ${answers.github}
  ${answers.email}

`;
}

module.exports = generateMarkdown;
