// Code goes here!
class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }
  describe() {
    console.log("department" + this.name);
  }
}

const accounting = new Department("Accounting");

console.log(accounting);
