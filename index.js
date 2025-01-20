// TODO: Include packages needed for this application
import fs from 'fs'
import inquirer from 'inquirer'
import {generateMarkdown} from './generateMarkdown.js';

// TODO: Create an array of questions for user input
inquirer
 .prompt([
    {   type: 'input',
        message:'What is your GitHub username?',
        name: 'gitHub' 
    },
    {    
        type: 'input',
        message:'What is your email address?',
        name: 'email'
    },
    {   
        type: 'input',
        message:"What is your project's name?", 
        name: 'projectName'
    },
    {   
        type: 'input', 
        message:"Please write a short description of your project.",
        name: 'description'
    },
    {   
        type: 'list', 
        message:"What kind of license whould your project have?", 
        choices: ['MIT', 'APACHE 2.0', 'GLP 3.0', 'BSD 3', 'None'],
        name: 'license'
    },
    {   
        type: 'input',
        message:"What command should be run to install dependencies?",
        name: 'install'
    },
    {   
        type: 'input',
        message:"What command should be run to run tests?", 
        name: 'test',
    },
    {   
        type: 'input',
        message:"What does the user need to know about using the repo?", 
        name: 'userInfo',
    },
    {   
        type: 'input',
        message:"What does the user need to know about contributing to the repo?",
        name: 'userContact'
    },    
])
.then((data) => {
    // Generate README content
    const readmeContent = generateMarkdown(data);

    // Write the README file
    fs.writeFile('./genREADME/README.md', readmeContent, (err) =>
      err ? console.error(err) : console.log('README.md successfully generated!')
    );
  });