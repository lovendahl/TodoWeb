const fs = require("fs");
const sqlite = require("./sqlite.js");
let testUser = "USER_TEST";

beforeAll(async () => {
  //setting up a database for the testUser.
  await sqlite.createAndSetupDatabase(testUser);
});

test("database exists", () => {
  expect(fs.existsSync(sqlite.getDatabaseFullPath(testUser))).toBe(true);
});

test("todo insert and read test", () => {
  //TODO Implement test that checks if todo obj. can be inserted and read
});

afterAll(async () => {
  //Deleting user and data.
  await sqlite.deleteUser(testUser);
});
