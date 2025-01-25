class Todo {
  //TODO get set for description.
  //TODO get set for status

  #headline;
  #creationDate;
  #description;

  constructor(headline) {
    this.headline = headline;
    this.#creationDate = new Date();
  }

  get Headline() {
    return this.#headline;
  }

  set Headline(headline) {
    this.#headline = headline;
  }
  setDescription(description) {
    this.#description = description;
  }

  getDescription() {
    return this.#description;
  }

  get creationEpoc() {
    return this.#creationDate.getTime();
  }

  getCreationDate_ToString() {
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
  // return new Proxy(this, {
  //   get: (_, prop) => this[prop],
  //   set: (_, prop, value) => {
  //     if (!(prop in this)) throw new Error('Prop does not exist!');
  //     this[prop] = value;
  //   }
  // });
}

class Status {
  static finished = new Status("finished");
  static notStarted = new Status("notStarted");

  constructor(name) {
    this.name = name;
  }
}
module.exports = {
  Todo,
};

//TODO Create a enmun with finished.
//TODO Set new todo in controctor to noStarted
//TODO create get and set for headline, desc. creationDate and finished.
