import { makeChart } from "./grafica.js"

const api = {
    key: '9e122cd782b2d0333f5fe4e7fa192062',
    url: `https://api.openweathermap.org/data/2.5/weather`
}

const card = document.getElementById('card')

const city = document.getElementById('city');
const date = document.getElementById('date');
const tempImg = document.getElementById('temp-img');
const temp = document.getElementById('temp');
const weather = document.getElementById('weather');
const searchbox = document.getElementById('searchbox'); //BUTTOM - LLAMADO PARA USAR EL BOTÓN.
const grafico = document.getElementById("grafico_gene");
const footer = document.getElementById("foot");

function updateImages(data) {
    const temp = toCelsius(data.main.temp);
    let src = 'cool.png';
    if (temp >= 26) {
        src = 'calors.jpg';
    } else if (temp < 20) {
        src = 'Frio.jpg';
    }
    tempImg.src = src;
}

//FUNCIÓN PRINCIPAL DE LA PÁGINA.
async function search(ciudad_Buscada) {
    try {
        const response = await fetch(`${api.url}?q=${ciudad_Buscada}&appid=${api.key}&lang=es`);
        const data = await response.json();
        card.style.display = 'block';
        const datas = [data.main.temp];
        const dataCelsius = [toCelsius(datas)];
        city.innerHTML = `${data.name}, ${data.sys.country}`;
        data.innerHTML = (new Date()).toLocaleDateString();
        date.innerHTML = `${data.innerHTML}`
        temp.innerHTML = `${toCelsius(data.main.temp)}°c`;
        weather.innerHTML = data.weather[0].description;
        const labels = [data.innerHTML];
        console.log(data);
        console.log(dataCelsius);
        updateImages(data);
        makeChart(labels, dataCelsius);
        grafico.setAttribute("style", "visibility:visible;");
        footer.setAttribute("style", "position:relative;");
    } catch (err) {
        console.log(err);
        alert('Debes seleccionar una ciudad');
    }
}

function toCelsius(kelvin) {
    return Math.round(kelvin - 273.15);
}

function onSubmit(event) {
    event.preventDefault();
    search(searchbox.value);
}

const searchform = document.getElementById('search-form');
searchform.addEventListener('submit', onSubmit, true);