class Todo {
  //TODO get set for status
  //TODO Create a enmun with finished.
  //TODO Set new todo in controctor to noStarted
  //TODO create get and set for headline, desc. creationDate and finished.

  #headline;
  #creationDate;
  #description;
  #status;

  static Status = {
    notStarted: Symbol("not Started"),
    inProcess: Symbol("in Process"),
    finished: Symbol("finished"),
  };

  constructor(headline) {
    this.headline = headline;
    this.#creationDate = new Date();
    this.#status = Todo.Status.notStarted;
  }

  get Headline() {
    return this.#headline;
  }
  set Headline(headline) {
    this.#headline = headline;
  }

  get Description() {
    return this.#description;
  }
  set Description(description) {
    this.#description = description;
  }

  get creationEpoc() {
    return this.#creationDate.getTime();
  }
  get Creation_ToString() {
    const options = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    return this.#creationDate.toLocaleString("en-GB", options);
  }

  get status() {
    switch (this.#status) {
      case Todo.Status.notStarted:
        return Todo.Status.notStarted.description;
      case Todo.Status.inProcess:
        return Todo.Status.inProcess.description;
      case Todo.Status.finished:
        return Todo.Status.finished.description;
    }
  }
  set status(status) {
    this.#status = status;
  }
}

module.exports = {
  Todo,
};

// const Status = {
//   notStarted: Symbol("not Started"),
//   inProcess: Symbol("in Process"),
//   finished: Symbol("finished"),
// };
