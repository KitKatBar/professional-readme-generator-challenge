// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case "Apache License 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
    case "GNU General Public License v3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
    case "MIT License":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
    case 'BSD 2-Clause "Simplified" License':
      return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]";
    case 'BSD 3-Clause "New" or "Revised" License':
      return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]";
    case "Boost Software License 1.0":
      return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]";
    case "Creative Commons Zero v1.0 Universal":
      return "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]";
    case "Eclipse Public License 2.0":
      return "[![License](https://img.shields.io/badge/License-EPL_2.0-red.svg)]";
    case "GNU Affero General Public License v3.0":
      return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]";
    case "GNU General Public License v2.0":
      return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]";
    case "GNU Lesser General Public License v2.1":
      return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v2.1-blue.svg)]";
    case "Mozilla Public License 2.0":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]";
    case "The Unlicense":
      return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case "Apache License 2.0":
      return "(https://opensource.org/licenses/Apache-2.0)";
    case "GNU General Public License v3.0":
      return "(https://www.gnu.org/licenses/gpl-3.0)";
    case "MIT License":
      return "(https://opensource.org/licenses/MIT)";
    case 'BSD 2-Clause "Simplified" License':
      return "(https://opensource.org/licenses/BSD-2-Clause)";
    case 'BSD 3-Clause "New" or "Revised" License':
      return "(https://opensource.org/licenses/BSD-3-Clause)";
    case "Boost Software License 1.0":
      return "(https://www.boost.org/LICENSE_1_0.txt)";
    case "Creative Commons Zero v1.0 Universal":
      return "(http://creativecommons.org/publicdomain/zero/1.0/)";
    case "Eclipse Public License 2.0":
      return "(https://opensource.org/licenses/EPL-2.0)";
    case "GNU Affero General Public License v3.0":
      return "(https://www.gnu.org/licenses/agpl-3.0)";
    case "GNU General Public License v2.0":
      return "(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
    case "GNU Lesser General Public License v2.1":
      return "(https://www.gnu.org/licenses/lgpl-2.1)";
    case "Mozilla Public License 2.0":
      return "(https://opensource.org/licenses/MPL-2.0)";
    case "The Unlicense":
      return "(http://unlicense.org/)";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `This project was built using the ${license}. Please refer to the LICENSE in the repo for more information.`;
  }

  else {
    return "No license is available.";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
## Description

${data.description}
        
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
${tableOfContentsGenerator(data)}
        
## Installation

Please follow these commands for installation.

1. Clone the repo into your local system.

HTTPS:
\`\`\`
git clone https://github.com/KitKatBar/professional-readme-generator-challenge.git
\`\`\`

SSH:
\`\`\`
git clone git@github.com:KitKatBar/professional-readme-generator-challenge.git
\`\`\`

2. Download inquirer using the following command.

\`\`\`
npm i inquirer@8.2.4
\`\`\`

## Usage

${data.usage}
        
## Credits

Licenses Badges & Links: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba

Our instructor Drew Hoang for introducing us the Node.js and OOP this week.  He provides good metaphors for how to do exercises and also makes speed-run videos that are very insightful for providing information and for reviewing class material.

Our TA Kyle Vance for his continued guidance during class and taking the time to explain new concepts. He continues to provide direction for students and is straight to the point in his explainations.

## License

${renderLicenseBadge(data.license) + renderLicenseLink(data.license)}
${renderLicenseSection(data.license)}
          
## How to Contribute

${data.contribution}

## Tests

${defaultTest(data.test)}

## Questions

This project was created by ${data.github}.
    
Click on [this link](https://github.com/${data.github}) to see more of my other works!

Have additional questions about this project?  You can reach out to me with any inquiries at: ${data.email}
`;
}

function tableOfContentsGenerator(data) {
  let appendString = "";

  if (data.contribution !== "") {
    appendString = appendString.concat("- [How to Contribute](#how-to-contribute)");
  }

  if (data.test !== "") {
    appendString = appendString.concat("- [Tests](#tests)");
  }

  if ((data.github !== "") || (data.email !== "")) {
    appendString = appendString.concat("- [Questions](#questions)");
  }

  console.log(appendString);
  return appendString;
}

function defaultTest(test) {
  return `In order to test this README generator, you can copy and paste these answers for their respective prompts.

  Please enter your project title:
  \`\`\`
  Professional README Generator Challenge - Writing Made Lazy!
  \`\`\`
  
  Please provide a short description explaining the what, why, and how of your project:
  \`\`\`
  When creating an open source project on GitHub, it's important to have a high-quality README for the app. This should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions—this last part increases the likelihood that other developers will contribute to the success of the project.
  
  You can quickly and easily generate a README file by using a command-line application to generate one. This allows the project creator to devote more time working on the project.
  \`\`\`
  
  Please provide the required steps required to install your project:
  \`\`\`
  1. Clone the repo into your local system.
  
  HTTPS:
  \`\`\`
  git clone https://github.com/KitKatBar/professional-readme-generator-challenge.git
  \`\`\`
  
  SSH:
  \`\`\`
  git clone git@github.com:KitKatBar/professional-readme-generator-challenge.git
  \`\`\`
  
  2. Download inquirer using the following command.
  
  \`\`\`
  npm i inquirer@8.2.4
  \`\`\`
  \`\`\`
  
  Please provide instructions and examples for use:
  \`\`\`
  This project automatically generates a professional README.  The user will be prompted with several questions for input.
  
  To get test input, please see the [Tests](#tests) section of this README.
  \`\`\`
  
  Please provide guidelines on how to contribute to your project:
  \`\`\`
  You can contribute to this project by suggesting or providing better templates for generation!
  \`\`\`
  
  Please provide any test applications and how to run them:
  \`\`\`
  You can enter anything in this section because the README automatically generates a default test example!
  \`\`\`
  
  Please select a license for your project:
  \`\`\`
  Select MIT License because this project uses it (or choose any one, up to you).
  \`\`\`
  
  Please enter your GitHub username:
  \`\`\`
  KitKatBar
  \`\`\`
  
  Please enter your e-mail address:
  \`\`\`
  katriel_chiu@msn.com
  \`\`\``;
}

module.exports = generateMarkdown;
