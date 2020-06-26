const mysql = require("mysql");
const inquirer = require("inquirer");
// const cTable = require("console.table");

  

const connection = mysql.createConnection({
    host: "localhost",

    // Port
    port: 3306,
    user:"root",
    password:"root",
    database: "gameofthrones_db"
});

// connection and error
connection.connect(function(err)    {
    if (err) throw err;
    console.log("Winter is coming!");
    runSearch();
});

// CLI
function runSearch()    {
    inquirer.prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
            "View all The Seven Kingdoms",
            "View all by house",
            "View all by loyalty",
            "View all by position",
            "Add person",
            "Send person to their god/gods",
            "Update person's position",
            "Update person's loyalty",
            "Update person's house",
            "Add position",
            "Remove position",
            "Add house",
            "Remove house",
            "Add loyalty",
            "Remove loyalty",
            "Quit",

        ]
    })
    .then(function(answer) {
        switch (answer.action) {
        case "View all The Seven Kingdoms":
          personSearch();
          break;
  
        case "View all by house":
          houseSearch();
          break;
  
        case "View all by loyalty":
          loyaltySearch();
          break;
  
        case "View all by position":
          positionSearch();
          break;
  
        case "Add person":
          addPerson();
          break;
          
          case "Send person to their god/gods":
          deadPerson();
          break;

          case "Update person's position":
          updatePerson();
          break;

          case "Update person's loyalty":
          updateLoyalty();
          break;

          case "Update person's house":
          updateHouse();
          break;

          case "Add position":
          addPosition();
          break;

          case "Remove position":
          removePosition();
          break;

          case "Add house":
          addHouse();
          break;

          case "Remove house":
          removeHouse();
          break;

          case "Add loyalty":
          addLoyalty();
          break;
          
          case "Remove loyalty":
          removeLoyalty();
          break;

          default: throw err;
        }
      });
}

function personSearch() {
    let query = "SELECT * FROM person INNER JOIN position on person.position_id = position.id";   
    "SELECT * FROM position INNER JOIN house on position.house_id = house.id;";
    connection.query(query, function(err, res) {
      if (err) throw err;
      console.table(res);
      runSearch();
    });
  }

  function houseSearch() {
    let query = "SELECT * FROM house ORDER house";
    connection.query(query, function(err, res) {
      if (err) throw err;
      console.table(res);
      runSearch();
    });
  }

  function loyaltySearch() {
    let query = 
    connection.query(query, function(err, res) {
      if (err) throw err;
      console.table(res);
      runSearch();
    });
  }

  function positionSearch() {
    let query = "SELECT * FROM position";
    connection.query(query, function(err, res) {
      if (err) throw err;
      console.table(res);
      runSearch();
    });
  }