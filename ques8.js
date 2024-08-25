function Creature() {
  this.species = "Creature";
}

Creature.prototype.makeNoise = function() {
  console.log("generic noise");
};

function Canine() {
  Creature.call(this);
}

Canine.prototype = Object.create(Creature.prototype);
Canine.prototype.constructor = Canine;

Canine.prototype.makeNoise = function() {
  console.log("Woof");
};

const myPet = new Canine();

myPet.makeNoise(); // This will log "Woof"
