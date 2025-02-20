const fs = require("fs");
const sqlite = require("./sqlite.js");
const t = require("./public/Todo.js");
const tHlp = require("./testHelpers.js");
let testUser = "USER_TEST";

beforeAll(async () => {
  //setting up a database for the testUser.
  await sqlite.createAndSetupDatabase(testUser);
});

test("database exists", () => {
  expect(fs.existsSync(sqlite.getDatabaseFullPath(testUser))).toBe(true);
});

test("test inserting right obj in saveTodo", () => {
  var headln = tHlp.randomString(16);
  var tmpTodo = new t.Todo(headln);
  sqlite.saveTodo(testUser, tmpTodo);
});

test("test insert todo and get row id", async () => {
  var headln = tHlp.randomString(14);
  var tmpTodo = new t.Todo(headln);
  try {
    var id = await sqlite.saveTodo_getId2(testUser, tmpTodo);
    expect(id).toEqual(expect.any(Number));
  } catch (err) {}
});

test("test insert todo and get right number", async () => {
  var headln = tHlp.randomString(18);
  var tmpTodo = new t.Todo(headln);
  try {
    // ...//den kører ikke testen. returnerer den promise?
    var id = await sqlite.saveTodo_getId2(testUser, tmpTodo);
    var todo = sqlite.loadTodo(testUser, Id);
    expect(todo).toEqual(expect.any(String));
    expect(false).toBe(true);
    console.log("got todo: " + todo);
  } catch (err) {}
});

afterAll(async () => {
  //Deleting user and data.
  // await sqlite.deleteUser(testUser);
});
