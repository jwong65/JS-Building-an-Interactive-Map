// create map

const myMap = L.map('map', {
    center: [48.868672, 2.342130],
    zoom: 12,
});




// add openstreetmap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: '15',
}).addTo(myMap)



// create and main add geolocation marker


// draw the 2nd arrondissement


// create red pin marker


// metro station markers



