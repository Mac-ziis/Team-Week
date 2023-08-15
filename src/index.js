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
    </br>
    Common name: "${entry.common_name}"
    </br>
    Scientific name: "${entry.scientific_name}"
    </br>
    Other Names: "${entry.other_name}
    </br>
    <img src="${entry.default_image.small_url}">
    Cycle: ${entry.cycle}
    </br>
    Lighting Preference: ${entry.sunlight}
    </br>
    Watering Preference: ${entry.watering}`;
  }); 
}

function printError(error) {
  document.getElementById("result-area").innerText = `There was an error accessing data: ${error}`;
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