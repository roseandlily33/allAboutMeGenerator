const fs = require('fs');
const inquirer = require('inquirer');

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

console.log(response.name);
//Writes the answers to a new file:
fs.writeFile(`${response.name}.json`, JSON.stringify(response), err => err ? console.log(err): console.log('imported'))
});