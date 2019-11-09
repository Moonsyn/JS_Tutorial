const weather = document.querySelector(".js-weather");

const COORDS = 'coords';
const API_KEY = "19062284d96edefeb8a2a10aa47b638f";

function getWeather(lat, lon){
    console.log(lat, lon);
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json();
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
        console.log(json);
    });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longtitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longtitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longtitude);
    console.log("success!");
}

function handleGeoError(){
    console.log("Failed!");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}
function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }else{
        const parseCoords = JSON.parse(loadedCoords);
        console.log(parseCoords);
        getWeather(parseCoords.latitude, parseCoords.longtitude);
    }
}

function init(){
    loadCoords();
}

init();