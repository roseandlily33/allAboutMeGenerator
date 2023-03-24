const fs = require('fs');
const inquirer = require('inquirer');
const htmlTemplate = require('./htmlTemp');

inquirer.prompt([
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'Where do you live?',
        name: 'location'
    },{
        type: 'input',
        message: 'What is your linkdin URL?',
        name: 'linkdin'
    },{
        type: 'input',
        message: 'What is your GitHub URL?',
        name: 'Github',
    }
])
.then((response)=>{
fs.writeFile(`${response.name}.html`, htmlTemplate(response), err => err ? console.log(err): console.log('imported'))
});