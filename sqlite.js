//TODO lav en function der indsætter en ny todo i tabellen.
//TODO lav en function der henter alle todos fra tabellen.
//TODO lav en function der sletter en todo fra tabllen.

const fs = require("fs");
const path = require("path");
const sqlite3 = require("sqlite3");
const dataDir = "DATA";
const todoDBname = "todo.db";
module.exports = {
  createAndSetupDatabase,
  deleteUser,
  getDatabase,
  getDatabaseFullPath,
  isDatabaseOpen,
};

function createAndSetupDatabase(userID) {
  return new Promise((resolve, reject) => {
    try {
      // Create user folder if it does not exist.
      if (!fs.existsSync(path.join(dataDir, userID))) {
        fs.mkdirSync(path.join(dataDir, userID));
      }

      // Creating database.
      const db = new sqlite3.Database(getDatabaseFullPath(userID), (err) => {
        if (err) {
          console.error("Error opening database:", err.message);
          reject(err);
        }
      });

      // Create todo table.
      var sql =
        "CREATE TABLE IF NOT EXISTS todo (id INTEGER PRIMARY KEY, headline TEXT, description TEXT, finished INTEGER, created TEXT)";
      executeSql(db, sql)
        .then((response) => {
          resolve();
        })
        .catch((err) => {
          db.close();
          reject(err);
        });
    } catch (err) {
      console.error(err);
      reject(err);
    }
  });
}

function deleteUser(userID) {
  try {
    fs.rm(path.join(dataDir, userID), { recursive: true }, (err) => {
      if (err) {
        console.error("deleteUserError err : " + err);
        return;
      }
    });
  } catch (err) {
    console.error(err);
  }
}

// function doDelete(userID) {
//   setTimeout(() => deleteUser(userID), 1000).unref();
// }

function getDatabase(userID) {
  return new sqlite3.Database(
    getDatabaseFullPath(userID),
    sqlite3.OPEN_READWRITE
  );
}
function getDatabaseFullPath(userID) {
  return path.join(dataDir, userID, todoDBname);
}

async function executeSql(db, sql) {
  return new Promise((resolve, reject) => {
    db.exec(sql, (err) => {
      if (err) reject(err);
      resolve("success");
      db.close();
    });
  });
}

function isDatabaseOpen(userID) {
  return new Promise((resolve, reject) => {
    let db = getDatabase(userID);

    db.get("SELECT 1", (err, row) => {
      if (err) {
        reject(false);
      } else {
        resolve(true);
      }
      db.close();
    });
  });
}
