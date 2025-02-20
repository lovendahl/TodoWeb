//TODO lav en function der indsætter en ny todo i tabellen.
//TODO lav en function der henter alle todos fra tabellen.
//TODO lav en function der sletter en todo fra tabllen.

const fs = require("fs");
const path = require("path");
const sqlite3 = require("sqlite3");
const dataDir = "DATA";
const todoDBname = "todo.db";
const todo = require("./public/Todo.js");
module.exports = {
  createUserFolder,
  createUserDatabase,
  createTodoTable,
  createAndSetupDatabase,
  deleteUser,
  createTodo,
};

async function createAndSetupDatabase(userID) {
  try {
    console.log("creating user :" + userID);
    await createUserFolder(userID);

    await createUserDatabase(userID);

    await createTodoTable(userID);
  } catch (err) {
    console.error("Error_createAndSetupDatabase: " + err);
  }
}

async function createUserFolder(userID) {
  console.log("Creating userfolder.");
  if (!fs.existsSync(path.join(dataDir, userID))) {
    fs.mkdirSync(path.join(dataDir, userID));
  }
  console.log("Creating userfolder. succes.");
}

async function createUserDatabase(userID) {
  console.log("creating user db...");
  // const db =  new sqlite3.Database(getDatabaseFullPath(userID), function (err) {
  //   throw err;
  // });
  const db = new sqlite3.Database(getDatabaseFullPath(userID));

  db.close();
  console.log("creating user db... success");
}

async function createTodoTable(userID) {
  console.log("Creating todo table ...");

  var sql =
    "CREATE TABLE IF NOT EXISTS todo (id INTEGER PRIMARY KEY, headline TEXT, description TEXT, finished INTEGER, created DATE)";
  try {
    await executeSql(userID, sql);
  } catch (e) {
    console.log("create table error: " + e);
  }
  console.log("Execued sql: " + sql);
  console.log("Creating todo table ...success");
}

async function deleteUser(userID) {
  fs.rm(path.join(dataDir, userID), { recursive: true }, (err) => {
    if (err) {
      throw new err();
    }
  });
}

async function createTodo(userID, Todo) {
  const sql =
    "INSERT INTO todo (headline, description, finished, created) VALUES (?, ?, ?, ?)";
  const params = [Todo.headline, Todo.description, Todo.finished, Todo.created];
  const db = await get(sql, params);
  db.close();
}

//Helper functions TODO Skal ikke være tilgang fra dem eksternt.
async function executeSql(userID, sql) {
  console.log("...Executing sql: " + sql);
  const db = await getDatabase(userID);
  sql =
    "CREATE TABLE IF NOT EXISTS todo (id INTEGER PRIMARY KEY, headline TEXT, description TEXT, finished INTEGER, created DATE)";
  console.log("RUN: " + JSON.stringify(db.exec(sql)));

  // db.run(sql, function (err) {
  //   if (err) {
  //     console.log("error: " + err);
  //     reject(err);
  //   } else {
  //     console.log("table created sucessfully ");
  //     resolve();
  //   }
  // });
  // console.log("closing db");
  // db.close();
}

async function getDatabase(userID) {
  console.log("getting database. " + userID);
  console.log("Database path: " + getDatabaseFullPath(userID));
  return new sqlite3.Database(
    getDatabaseFullPath(userID),
    sqlite3.OPEN_READWRITE
  );
}

function getDatabaseFullPath(userID) {
  return path.join(".", dataDir, userID, todoDBname);
}
