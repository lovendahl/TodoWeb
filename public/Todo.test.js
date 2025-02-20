const t = require("./Todo.js");
const tHlp = require("../testHelpers.js");

test("test todo class creatin", () => {
  var tmpTodo = new t.Todo("hl");
  expect(tmpTodo.headline).toBe("hl");
});

test("test todo class with description", () => {
  var tmpTodo = new t.Todo("hl");
  tmpTodo.description = "desc";
  expect(tmpTodo.headline).toBe("hl");
  expect(tmpTodo.description).toBe("desc");
});

test("test creation date", () => {
  var tmpTodo = new t.Todo("hl");
  expect(tmpTodo.creationEpoc).toBeLessThan(Date.now() + 1);
});

test("Test getSetHeadline with random text", () => {
  var tmp = new t.Todo("headline");
  var tmpHl = tHlp.randomString(10);
  var tmpDesc = tHlp.randomString(20);
  tmp.Headline = tmpHl;
  tmp.Description = tmpDesc;
  expect(tmp.Headline).toBe(tmpHl);
  expect(tmp.Description).toBe(tmpDesc);
});

test("test print of creation date", () => {
  var tmpTodo = new t.Todo("h2");
  var checkDate = new Date();
  const options = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  expect(tmpTodo.Creation_ToString).toBe(
    checkDate.toLocaleString("en-GB", options)
  );
});

test("testing status of todos", () => {
  var tmpTodo = new t.Todo("hl");
  expect(tmpTodo.status).toBe(t.Todo.Status.notStarted.description);
  tmpTodo.status = t.Todo.Status.inProcess;
  expect(tmpTodo.status).toBe(t.Todo.Status.inProcess.description);
  tmpTodo.status = t.Todo.Status.finished;
  expect(tmpTodo.status).toBe(t.Todo.Status.finished.description);
});

// //Helper functions.
// function randomString(length) {
//   let result = " ";
//   const characters =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   const charactersLength = characters.length;
//   for (let i = 0; i < length; i++) {
//     result += characters.charAt(Math.floor(Math.random() * charactersLength));
//   }

//   return result;
// }
