import { makeChart } from "./grafica.js"

const api = {
    key: '9e122cd782b2d0333f5fe4e7fa192062',
    url: `https://api.openweathermap.org/data/2.5/weather`
}

const card = document.getElementById('card'); //CONTENEDOR PRINCIPAL DE LA PRESENTACIÓN DEL CLIMA.

const city = document.getElementById('city'); //DIV - LLAMADO PARA LA CIUDAD.
const date = document.getElementById('date'); //DIV - LLAMADO PARA LA FECHA.
const tempImg = document.getElementById('temp-img'); //IMG - LLAMADO PARA LA IMAGEN.
const temp = document.getElementById('temp'); //DIV - LLAMADO PARA LA TEMPERATURA.
const weather = document.getElementById('weather'); //DIV - LLAMADO PARA EL ESTADO DEL CLIMA.
const searchbox = document.getElementById('searchbox'); //BUTTOM - LLAMADO PARA USAR EL BOTÓN.
const grafico = document.getElementById("grafico_gene");
const footer = document.getElementById("foot");

//FORM - LLAMADO PARA USAR EL "ADD_EVENT:LISTENER"
const searchform = document.getElementById('search-form');
searchform.addEventListener('submit', onSubmit, true);

//FUNCIÓN PARA ACTUALIZAR LA IMÁGEN.
function updateImages(data) {
    const temp = toCelsius(data.main.temp);
    let src = './Images/cool.png';
    if (temp >= 26) {
        src = './Images/calors.jpg';
    } else if (temp < 20) {
        src = './Images/Frio.jpg';
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

//CONVERSIÓN DE KELVIN A CELCIUS
function toCelsius(kelvin) {
    return Math.round(kelvin - 273.15);
}

//FUNCIÓN SUBMIT Y LLAMADO DE LA FUNCIÓN "SEARCH"
function onSubmit(event) {
    event.preventDefault();
    search(searchbox.value);
}