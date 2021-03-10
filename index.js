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
[![Demo](http://img.youtube.com/vi/JC9xbyCOtQg/0.jpg)](http://www.youtube.com/watch?v=JC9xbyCOtQg "Readme")
## Usage
${data.usage}
## Contributors
${data.contributors}
## License
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