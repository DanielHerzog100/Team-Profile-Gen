const inquirer = require ("inquirer");
const Manager = require ("./lib/manager");
const managerQuestions = [
    {
        type:"input",
        name:"id",
        message:"What is the id of your manager?",
    },
    {
        type:"input",
        name:"name",
        message:"What is the name of your manager?"
    },
    {
        type:"input",
        name:"email",
        message:"What is the email of your manager?",
    },
    {
        type:"input",
        name:"officeNumber",
        message:"What is your manager's office number?",
    },
]

inquirer.prompt(managerQuestions)
.then(answers=>
    {
const manager = new Manager(answers.id, answers.name,answers.email,answers.officenumber)
console.log(manager)
    })

    const Engineer = require ("./lib/engineer");
    const engineerQuestions = [
        {
            type:"input",
            name:"id",
            message:"What is the id of your engineer?",
        },
        {
            type:"input",
            name:"name",
            message:"What is the name of your engineer?"
        },
        {
            type:"input",
            name:"email",
            message:"What is the email of your engieer?",
        },
        {
            type:"input",
            name:"github",
            message:"What is your engineer's github?",
        },
    ]
    
    inquirer.prompt(engineerQuestions)
    .then(answers=>
        {
    const engieer = new Engineer(answers.id, answers.name,answers.email,answers.officenumber)
    console.log(engineer)
        })