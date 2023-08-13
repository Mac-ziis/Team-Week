document.addEventListener('DOMContentLoaded', function () {
  // Business Logic

  export default function Plant(type, quantity) {
    this.type = type;
    this.quantity = quantity;
  }

  Plant.prototype.calculateCost = function () {
    let cost = 0;
    switch (this.type) {
      case "flower":
        cost = 2.99;
        break;
      case "tree":
        cost = 12.99;
        break;
      case "shrub":
        cost = 6.99;
        break;
    }
    return cost * this.quantity;
  };

  function calculateTax(cost) {
    const taxRate = 0.18;
    return cost * taxRate;
  }
  
})