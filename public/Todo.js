class Todo {
    constructor(headline){
        this.headline = headline;
        this.creationDate = Date.now();
    }
};
module.exports = {Todo};

//var t = new Todo("localHeadline");
//console.log("todo: " + t);