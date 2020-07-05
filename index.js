const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Add a description of your project:'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Add installation instructions:'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Add usage information:'
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Add contribution guidlines:'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Add test instructions'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please select a license from the following list',
    choices: ['MIT', 'GPL', 'Apache']
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email?'
  }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
const init = readmeData => {
  inquirer.prompt(questions)
    .then(answers => {
      console.log(JSON.stringify(answers, null, ' '));
    });
}

// function call to initialize program
init()