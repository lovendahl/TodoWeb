const t = require("./Todo.js");

test('test todo class creatin',()=> {
    var tmpTodo = new t.Todo("hl");
    expect(tmpTodo.headline).toBe("hl");
});

test('test todo class with description',()=> {
    var tmpTodo = new t.Todo("hl");
        tmpTodo.description = "desc";
    expect(tmpTodo.headline).toBe("hl");
    expect(tmpTodo.description).toBe("desc");
});

test('test creation date',()=> {
    var tmpTodo = new t.Todo("hl");
    expect(tmpTodo.creationDate).toBeLessThan(Date.now()+1);
});