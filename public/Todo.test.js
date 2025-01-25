const t = require("./Todo.js");

test("test todo class creatin", () => {
  var tmpTodo = new t.Todo("hl");
  expect(tmpTodo.headline).toBe("hl");
});

test("test todo class with description", () => {
  var tmpTodo = new t.Todo("hl");
  tmpTodo.description = "desc"; //TODO det skal være en get /set i stedet.
  expect(tmpTodo.headline).toBe("hl");
  expect(tmpTodo.description).toBe("desc");
});

test("test creation date", () => {
  var tmpTodo = new t.Todo("hl");
  expect(tmpTodo.creationEpoc).toBeLessThan(Date.now() + 1);
});

test("getSetHeadline ", () => {
  var tmp = new t.Todo("headline");
  var headline = "myheadline";
  tmp.Headline = headline;
  expect(tmp.Headline).toBe(headline);
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
  var d = new Date();
  expect(tmpTodo.getCreationDate_ToString()).toBe(
    checkDate.toLocaleString("en-GB", options)
  );
});
