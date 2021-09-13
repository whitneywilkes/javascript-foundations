class Unicorn {
  constructor(name, color) {
    this.name = name;
    this.color = color || 'white';
  };
  isWhite() {
    return this.color = false;
  };
  says(someStuff) {
    return `**;* ${someStuff} *;**`
  };
};

module.exports = Unicorn;
