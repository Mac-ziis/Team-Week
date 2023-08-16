export default class PlantService {
  static getPlant(plantName) {
    return fetch(`https://perenual.com/api/species-list?q=${plantName}&key=sk-jg7F64d9204e783ca1868`)
    .then(function(response) {
      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText}`;
        throw new Error(errorMessage);
      } else {
        return response.json();
      }
    })
    .catch(function(error) {
      return error;
    });
  }
}