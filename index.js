// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
inquirer
.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install this app?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your app?',
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Did anyone help you with this app?',
    },
    {
        type: 'list',
        name: 'licenses',
        message: 'What license did you use?',
        choices: ['MIT', 'APACHE', 'GPL', 'ISC'],
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'linkedin',
        message: 'What is your LinkedIn username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your Email?',
    },
    
])
.then((data) => {
    console.log(data)

    var readMePageContent = 
   
    
`# ${data.title}
* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
* [Licenses](#licences)
# Installation
${data.installation}

## Usage
${data.usage}
[![Video](https://ch3302files.storage.live.com/y4pSb8fe9GPooIKyqHePM0d1XDxHbihzJoWtOUGgOfN2LE2nHrUq5XTnG4t3DARS748W69Se9JoWVohZpo8YLGFu66AS0TugzNWWVnaWNGKaHuIvWGUCKnxvczEwmjOpTd_Y_aKiv8KHO7d951XN6_Jp2qTlnwJ2leipJWVA74zLU2o0QwvrgqfoVpTarcXR2E8PG3otePedFfslWMXkviA8zB6K07j2v-KazJjrU3e82o/2021-03-09%20%284%29.png?psid=1&width=1588&height=894)](http://www.youtube.com/watch?v=JC9xbyCOtQg "Readme")
## Contributors
${data.contributors}
## Licenses
${data.licenses}
    
# Contact
* GitHub :${data.username}
* LinkedIn :${data.linkedin}
* Email :${data.email}`;
    



fs.writeFile('README.md', readMePageContent, (err) =>
    err ? console.log(err) : console.log('README.md has been created')
    );
})

    


// TODO: Create a function to write README file


// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();