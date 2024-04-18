// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Please enter your project title: ",
        name: "title"
    },
    {
        type: "input",
        message: "Please provide a short description explaining the what, why, and how of your project: ",
        name: "description"
    },
    {
        type: "input",
        message: "Please provide the required steps required to install your project: ",
        name: "installation"
    },
    {
        type: "input",
        message: "Please provide instructions and examples for use: ",
        name: "usage"
    },
    {
        type: "input",
        message: "Please provide guidelines on how to contribute to your project: ",
        name: "contribution"
    },
    {
        type: "input",
        message: "Please provide any test applications and how to run them: ",
        name: "test"
    },
    {
        type: "list",
        message: "Please select a license for your project: ",
        name: "license",
        choices: [
            "Apache License 2.0",
            "GNU General Public License v3.0",
            "MIT License",
            'BSD 2-Clause "Simplified" License',
            'BSD 3-Clause "New" or "Revised" License',
            "Boost Software License 1.0",
            "Creative Commons Zero v1.0 Universal",
            "Eclipse Public License 2.0",
            "GNU Affero General Public License v3.0",
            "GNU General Public License v2.0",
            "GNU Lesser General Public License v2.1",
            "Mozilla Public License 2.0",
            "The Unlicense"
            ]
    },
    {
        type: "input",
        message: "Please enter your GitHub username: ",
        name: "github"
    },
    {
        type: "input",
        message: "Please enter your e-mail address: ",
        name: "email"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log("Successfully generated!")
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        console.log("Generating README ...");
        writeToFile("README.md", generateMarkdown(response));
    });
}

// Function call to initialize app
init();
