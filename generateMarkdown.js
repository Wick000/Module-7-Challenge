function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-green)';
  } else if (license === 'APACHE 2.0') {
    return '![License: APACHE 2.0](https://img.shields.io/badge/License-APACHE%202.0-blue)'; 
  } else if (license === 'GLP 3.0') {
    return '![License: GLP 3.0](https://img.shields.io/badge/License-GPL%203.0-purple)'; 
  } else if (license === 'BSD 3') {
    return '![License: BSD 3](https://img.shields.io/badge/License-BSD%203-red)'; 
  } else {
    return '';
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT';
  } else if (license === 'APACHE 2.0') {
    return 'https://opensource.org/licenses/APACHE%202.0'; 
  } else if (license === 'GPL 3.0') {
    return 'https://opensource.org/licenses/GPL-3.0';
  } else if (license === 'BSD 3') {
    return 'https://opensource.org/licenses/BSD-3-Clause';
  } else {
    return ''; 
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }
  return `## License

This project is licensed under the ${license} license. For more information, see [this link](${renderLicenseLink(
    license
  )}).`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);

  return `# ${data.projectName}

${licenseBadge}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

Run the following command to install dependencies:

\`\`\`
${data.install}
\`\`\`

## Usage

${data.userInfo}


${renderLicenseSection(data.license)}

## Contributing

${data.userContact}

## Tests

Run the following command to run tests:

\`\`\`
${data.test}
\`\`\`

## Questions

If you have any questions, feel free to reach out to me at ${data.email}. You can also find me on GitHub at [${data.gitHub}](https://github.com/${data.gitHub}).
`;
}

export { renderLicenseBadge, generateMarkdown };



