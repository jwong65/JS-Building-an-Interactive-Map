// create map

const myMap = L.map('map', {
    center: [48.868672, 2.342130],
    zoom: 12,
});




// add openstreetmap tiles
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: '15',
}).addTo(myMap)



// create and main add geolocation marker

var marker = L.marker([48.87007, 2.346453]).addTo(myMap).bindPopup('<p1>The Hoxton, Paris<p1>').openPopup()

// draw the 2nd arrondissement

var polygon = L.polygon([

]).addTo(myMap)


// create red pin marker

// Metro station markers:
const rS = L.marker([48.866200610611926, 2.352236247419453]).bindPopup('RÃ©️aumur-SÃ©️bastopol')
const sSD = L.marker([48.869531786321566, 2.3528590208055196]).bindPopup('Strasbourg-Saint-Denis')
const sentier = L.marker([48.8673721067762, 2.347107922912739]).bindPopup('Sentier')
const bourse = L.marker([48.86868503971672, 2.3412285142058167]).bindPopup('Bourse')
const qS = L.marker([48.869560129483226, 2.3358638645569543]).bindPopup('Quatre Septembre')
const gB = L.marker([48.871282159004856, 2.3434818588892714]).bindPopup('Grands Boulevards')
 
const stations = L.layerGroup([rS, sSD, sentier, bourse, qS, gB]).addTo(myMap)




