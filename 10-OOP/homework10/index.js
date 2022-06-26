const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const fs = require("fs");
const renderTeam = require("./src/html-templates");
const managerQuestions = [
  {
    type: "input",
    name: "id",
    message: "What is the id of your manager?",
  },
  {
    type: "input",
    name: "name",
    message: "What is the name of your manager?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the email of your manager?",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is your manager's office number?",
  },
];

inquirer.prompt(managerQuestions).then((answers) => {
  const manager = new Manager(
    answers.id,
    answers.name,
    answers.email,
    answers.officenumber
  );
  console.log(manager);
});
function addEmployees() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "What employees would you like to add?",
        choices: ["engineer", "intern", "it's done"],
      },
    ])

    .then((answer) => {
      switch (answer.choice) {
        case "engineer":
          engineerQuestions();
          break;
        case "intern":
          internQuestions();
          break;
        case "it's done":
          engineerQuestions();
          break;
      }
    });
}
const engineerQuestions = [
  {
    type: "input",
    name: "id",
    message: "What is the id of your engineer?",
  },
  {
    type: "input",
    name: "name",
    message: "What is the name of your engineer?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the email of your engieer?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your engineer's github?",
  },
];

inquirer.prompt(engineerQuestions).then((answers) => {
  const engineer = new Engineer(
    answers.id,
    answers.name,
    answers.email,
    answers.github
  );
  console.log(engineer);
});

const internQuestions = [
  {
    type: "input",
    name: "id",
    message: "What is the id of your intern?",
  },
  {
    type: "input",
    name: "name",
    message: "What is the name of your intern?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the email of your intern?",
  },
  {
    type: "input",
    name: "school",
    message: "What is your intern's school?",
  },
];

inquirer.prompt(internQuestions).then((answers) => {
  const intern = new Intern(
    answers.id,
    answers.name,
    answers.email,
    answers.school
  );
  console.log(intern);
});
