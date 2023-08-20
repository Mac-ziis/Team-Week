import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import PlantService from "./js/plant-finder.js";
import PlantImgService from "./js/plant-img-service.js";
// import WeatherService from './js/weather-service.js';

// Business Logic for plant-finder

function getPlant(plantName) {
  PlantService.getPlant(plantName).then(function (response) {
    if (response.data) {
      plantInfo(response, plantName);
    } else {
      printError(response);
    }
  });
}

//Business Logic for plant-img-service

function getPlantByImage(plantImage) {
  PlantImgService.getPlantByImage(plantImage).then(function (response) {
    if (response.results) {
      plantImgInfo(response);
    } else {
      printError(response);
    }
  });
}

// UI Logic for plant-finder

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

window.addEventListener("load", function () {
  document.getElementById("textForm").addEventListener("submit", handleForm);
});

//UI for plant-img-service

function plantImgInfo(response) {
  const container = document.getElementById("result-area");
  container.innerHTML = `This plant might be: ${response.bestMatch}`;
}

function handleImageForm(event) {
  event.preventDefault();
  const plantImage = document.getElementById("image-input").value;
  document.getElementById("image-input").value = null;
  getPlantByImage(plantImage);
}

window.addEventListener("load", function () {
  document.getElementById("imageForm").addEventListener("submit", handleImageForm);
});

// Ui for weather-service

// function printElements(data) {
//   document.getElementById('result-area').innerText = `The humidity in ${data[1]} is ${data[0].main.humidity}%.
//   The temperature in Fahrenheit is ${Math.round(1.8 *(data[0].main.temp - 273.15) + 32)} degrees.
//   The weather in ${data[1]} is ${data[0].weather[0].description}.`;

// }

// function printBad(error) {
//   document.getElementById('result-area').innerText = `There was an error accessing the weather data for ${error[2]}: ${error[0].status} ${error[0].statusText}: ${error[1].message}`;
// }

// function handleFormSubmission(event) {
//   event.preventDefault();
//   const city = document.getElementById("location").value;
//   document.getElementById("location").value = null;
//   getWeather(city);
// }
