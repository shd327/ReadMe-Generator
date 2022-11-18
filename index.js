// Require modules to be used
const inquirer = require('inquirer');
const fs = require('fs');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What do you want to call the repository?'

        },
        {
            type: 'input',
            name: 'description',
            message: 'Please add a description'
        },
        {
            type: 'input',
            name: 'userName',
            message: 'Please add your github username'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please add installation instructions'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please add details on the usage of this project'
        },
        {
            type: 'list',
            choices: ["BSD 2-Clause License", "BSD 3-Clause License", "Apache 2.0 License", "The MIT License", "none"],
            name: 'badge',
            message: 'Please choose a license'
        },
        {
            type: 'input',
            name: 'license',
            message: 'Please add detail on the license'
        },

        {
            type: 'input',
            name: 'tests',
            message: 'Please add any testing information'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please provide an email address'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please provide your github profile url'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please add any resources used for this project'
        },


    ])
}