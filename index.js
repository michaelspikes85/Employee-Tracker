const mysql = require("mysql");
const inquirer = require("inquirer"),
// const cTable = require("console.table"),


 connection = mysql.createConnection({
    host: "localhost",

    // Port
    port: 3306,
    user:"root",
    password:"root",
    database: "company_db"
});

// connection and error
connection.connect(function(err)    {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    promptCompanyQuery();
});

// CLI
function promptCompanyQuery()    {
    inquirer.prompt({
        name: "action",
        type: "list",
        message: "What do you want to do?",
        choices: [
            "View employees",
            "Add employee",
            "Update employee",
            "View departments",
            "Add department",
            "View roles",
            "Add role",
            "Quit",

        ]
    })
}

