// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');


// TODO: Create an array of questions for user input
// const questions = [


  inquirer.prompt([
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "userName",
  },
  {
    type: "input",
    message: "What is the name of your repository?",
    name: "repoName",
  },
  {
    type: "input",
    message: "What is the title of your project?",
    name: "Title",
  },
  {
    type: "input",
    message: "Give me a description of your project?",
    name: "description",
  },
  {
    type: "input",
    message: "How is your project installed?",
    name: "installation",
  },
  {
    type: "input",
    message: "What type of license does your project have?",
    name: "license",
  },
  {
    type: "input",
    message: "How would somebody contribute to your project?",
    name: "contributing",
  },
  {
    type: "input",
    message: "Are there test for your project?",
    name: "tests",
  }
  
])
.then((answers) => {
  if (!fs.existsSync(`./${answers.userName}template.md`)) {
      fs.writeFile(`./${answers.userName}template.md`, writemd(answers), (error) => {
          if (error) {
              throw error
          }
      })
}
})
const writemd =(answers) => {
return `# Professional README Generator

    ## Description
    ${answers.desription}

    ## Table of Contents
    * [Desription](#description)
    * [Title](#title)
    * [Installation](#installation)
    * [License](#license)
    * [Contribution](#contribution)
    * [Tests](#tests)
    * [Questions](#questions)

    ## Title
    ${answers.Title}

    ## Installation
    ${answers.installation}

    ## License
    ${answers.license}

    ## Contribution
    ${answers.contributing}

    ## Tests
    ${answers.tests}

    ## Questions
    Please Contact Me:  
    - e-mail:  egarnes20010@gmail.com
    - GitHub:  <https://github.com/${answers.userName}>`
}
// TODO: Create a function to initialize app


//init();// Function call to initialize app 

//function init() {
    //files for inquirer
    //get answer objects
    //write the content to a writeTo File
//}

    
  
