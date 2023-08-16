import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Plant from './js/seed-catalog.js';

// Business Logic



// UI Logic for seed-catalog.js
// document.addEventListener('DOMContentLoaded', function () {

// function calculateTax(cost) {
//   const taxRate = 0.18;
//   return cost * taxRate;
// }

// function updateCost() {
//   const selectedType = document.querySelector('select[name="plant-type"]').value;
//   const quantity = parseFloat(document.getElementById('quantity').value);
//   const plant = new Plant(selectedType, quantity);
//   const cost = plant.calculateCost();
//   const costDisplay = document.getElementById('cost');
//   costDisplay.textContent = "Cost: $" + cost.toFixed(2);

//   return cost;
// }

// function updateReceipt(plant) {
//   const orderDetails = document.getElementById('order-details');
//   orderDetails.innerHTML = `Type: ${plant.type}<br>Quantity: ${plant.quantity}`;

//   const cost = plant.calculateCost();
//   const tax = calculateTax(cost);
//   const total = cost + tax;

//   const totalCost = document.getElementById('total-cost');
//   const taxAmount = document.getElementById('tax-amount');
//   const totalWithTax = document.getElementById('total-with-tax');

//   totalCost.innerHTML = `Total Cost: $${cost.toFixed(2)}`;
//   taxAmount.innerHTML = `Tax: $${tax.toFixed(2)}`;
//   totalWithTax.innerHTML = `Total with Tax: $${total.toFixed(2)}`;
// }

// function showReceipt() {
//   const receipt = document.getElementById('receipt');
//   receipt.classList.remove('hidden');
// }

// const plantTypeSelect = document.querySelector('select[name="plant-type"]');
// plantTypeSelect.addEventListener('change', () => {
//   updateCost();
// });

// function placeOrder() {
//   const selectedType = document.querySelector('select[name="plant-type"]');
//   const quantity = parseFloat(document.getElementById('quantity').value);
//   const plant = new Plant(selectedType, quantity);

//   updateReceipt(plant);
//   showReceipt();
// }

// const placeOrderButton = document.getElementById('place-order-btn');
// placeOrderButton.addEventListener('click', placeOrder);

// });

document.addEventListener("DOMContentLoaded", function () {
  // Business Logic
 

  function calculateTax(cost) {
    const taxRate = 0.18;
    return cost * taxRate;
  }

  // UI Logic
  function updateCost() {
    const selectedType = document.querySelector('select[name="plant-type"]').value;
    const quantity = parseFloat(document.getElementById('quantity').value);
    const plant = new Plant(selectedType, quantity);
    const cost = plant.calculateCost();
    const costDisplay = document.getElementById('cost');
    costDisplay.textContent = "Cost: $" + cost.toFixed(2);

    return cost;
  }

  function updateReceipt(plant) {
    const orderDetails = document.getElementById('order-details');
    orderDetails.innerHTML = `Type: ${plant.type}<br>Quantity: ${plant.quantity}`;

    const cost = plant.calculateCost();
    const tax = calculateTax(cost);
    const total = cost + tax;

    const totalCost = document.getElementById('total-cost');
    const taxAmount = document.getElementById('tax-amount');
    const totalWithTax = document.getElementById('total-with-tax');

    totalCost.innerHTML = `Total Cost: $${cost.toFixed(2)}`;
    taxAmount.innerHTML = `Tax: $${tax.toFixed(2)}`;
    totalWithTax.innerHTML = `Total with Tax: $${total.toFixed(2)}`;
  }

  function showReceipt() {
    const receipt = document.getElementById('receipt');
    receipt.classList.remove('hidden');
  }

  const placeOrderButton = document.getElementById('place-order-btn');
  placeOrderButton.addEventListener('click', () => {
    const selectedType = document.querySelector('select[name="plant-type"]').value;
    const quantity = parseFloat(document.getElementById('quantity').value);
    const plant = new Plant(selectedType, quantity);

    updateReceipt(plant);
    showReceipt();
    updateCost();
  });
});
