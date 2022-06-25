import inquirer from "inquirer";
import Manager from "./lib/manager"
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
.then(answers=>new Manager(answers.id, answers.name,answers.email,answers.officenumber))