function Item(name, cost, stock) {
  this.name = name;
  this.cost = cost;
  this.stock = stock;
}

Item.prototype.showDetails = function() {
  console.log(`Name: ${this.name}, Cost: $${this.cost}, Stock: ${this.stock}`);
};

function Gadget(name, cost, stock, manufacturer, modelName) {
  Item.call(this, name, cost, stock);
  this.manufacturer = manufacturer;
  this.modelName = modelName;
}

Gadget.prototype = Object.create(Item.prototype);
Gadget.prototype.constructor = Gadget;

Gadget.prototype.turnOn = function() {
  console.log(`${this.manufacturer} ${this.modelName} is now turned on.`);
};

Gadget.prototype.turnOff = function() {
  console.log(`${this.manufacturer} ${this.modelName} is now turned off.`);
};

function Apparel(name, cost, stock, size, fabric) {
  Item.call(this, name, cost, stock);
  this.size = size;
  this.fabric = fabric;
}

Apparel.prototype = Object.create(Item.prototype);
Apparel.prototype.constructor = Apparel;

Apparel.prototype.showApparelDetails = function() {
  console.log(`Size: ${this.size}, Fabric: ${this.fabric}`);
};

function Novel(name, cost, stock, writer, category) {
  Item.call(this, name, cost, stock);
  this.writer = writer;
  this.category = category;
}

Novel.prototype = Object.create(Item.prototype);
Novel.prototype.constructor = Novel;

Novel.prototype.showNovelDetails = function() {
  console.log(`Writer: ${this.writer}, Category: ${this.category}`);
};

const laptop = new Gadget('Laptop', 999.99, 10, 'Dell', 'XPS 13');
const tshirt = new Apparel('T-Shirt', 19.99, 50, 'M', 'Cotton');
const book = new Novel('JavaScript Basics', 29.99, 20, 'John Doe', 'Programming');

laptop.showDetails();
laptop.turnOn();
laptop.turnOff();

tshirt.showDetails();
tshirt.showApparelDetails();

book.showDetails();
book.showNovelDetails();
