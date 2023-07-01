function Designer(name, type) {
  this.name = name;
  this.type = type;
}

function Developer(name, type) {
  this.name = name;
  this.type = type;
}

function EmployeeFactory() {
  this.create = (name, type) => {
    switch (type) {
      case 1:
        return new Designer(name, type);
      case 2:
        return new Developer(name, type);
      default:
        break;
    }
  };
}

function say() {
  console.log("I am a " + this.name + "," + this.type);
}

const employeeFactory = new EmployeeFactory();

const binh = employeeFactory.create("binh", 1);
say.call(binh);
