import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import PlantService from './js/plant-finder.js';

// Business Logic

function getPlant(plantName) {
  PlantService.getPlant(plantName)
    .then(function(response) {
      if (response.data) {
        plantInfo(response, plantName);
      } else {
        printError(response);
      }
    });
}

// UI Logic

function plantInfo(response, plantName) {
  const container = document.getElementById("result-area");
  response.data.forEach((entry) => {
    container.innerHTML += `Results for "${plantName}":
    Common name: "${entry.data.common_name}"
    Scientific name: "${entry.data.scientific_name}"
    <img src="${entry.data.medium_url}">`;
  }); 
}

function printError(error) {
  document.getElementById("result-area").innerText = `There was an error accessing data: ${error.status}`;
}

function handleForm(event) {
  event.preventDefault();
  const plantName = document.getElementById("plant-name").value;
  document.getElementById("plant-name").value = null;
  getPlant(plantName);
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleForm);
});