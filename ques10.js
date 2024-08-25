function Vehicle(brand, modelName, manufactureYear, available = true) {
  this.brand = brand;
  this.modelName = modelName;
  this.manufactureYear = manufactureYear;
  this.available = available;
}

function Client(fullName, carsRented = []) {
  this.fullName = fullName;
  this.carsRented = carsRented;
}

Client.prototype.rentVehicle = function(vehicle) {
  if (vehicle.available) {
      vehicle.available = false;
      this.carsRented.push(vehicle);
      console.log(`${this.fullName} has rented a ${vehicle.brand} ${vehicle.modelName}.`);
  } else {
      console.log(`The ${vehicle.brand} ${vehicle.modelName} is currently not available.`);
  }
};

Client.prototype.returnVehicle = function(vehicle) {
  setTimeout(() => {
      vehicle.available = true;
      this.carsRented = this.carsRented.filter(v => v !== vehicle);
      console.log(`${this.fullName} has returned a ${vehicle.brand} ${vehicle.modelName}.`);
  }, 2000); // Simulate a 2-second delay
};

function VIPClient(fullName, carsRented = [], discount = 0.1) {
  Client.call(this, fullName, carsRented);
  this.discount = discount;
}

VIPClient.prototype = Object.create(Client.prototype);
VIPClient.prototype.constructor = VIPClient;

function computeRentalCost(vehicleType, rentalDays, client) {
  const dailyRate = 50;
  const typeRates = {
      SUV: 20,
      Sedan: 10,
      Truck: 30
  };

  let totalCost = dailyRate * rentalDays + (typeRates[vehicleType] || 0) * rentalDays;

  if (client instanceof VIPClient) {
      totalCost *= (1 - client.discount);
  }

  return totalCost;
}

function Service(vehicle, maintenanceDelay) {
  setTimeout(() => {
      vehicle.available = true;
      console.log(`The ${vehicle.brand} ${vehicle.modelName} has been serviced and is now available.`);
  }, maintenanceDelay);
}

const vehicle1 = new Vehicle('Toyota', 'Camry', 2020);
const vehicle2 = new Vehicle('Honda', 'Accord', 2019);
const vehicle3 = new Vehicle('Ford', 'Explorer', 2021, false); 

const regularClient = new Client('Alice');
const vipClient = new VIPClient('Bob', [], 0.15);

regularClient.rentVehicle(vehicle1); 
regularClient.rentVehicle(vehicle3); 

vipClient.rentVehicle(vehicle2); 
console.log(`Rental cost for Bob's Honda Accord for 3 days: $${computeRentalCost('Sedan', 3, vipClient)}`);

regularClient.returnVehicle(vehicle1);

Service(vehicle1, 3000); 
