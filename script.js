//Obtener los elementos del formulario

let buscarLugar = document.getElementById("buscarLugar");
let buscar = document.getElementById("buscar");
let grados = document.getElementById("grados");
let climaFrase = document.getElementById("climaFrase");


//Funciones secundarias

const displayData = ()=>{
}

const getWeatherData = async(city)=>{
    //petición a API y obtiene objeto con los datos
    const res = await fetch( 'https://open-weather13.p.rapidapi.com/city/landon', {
        "headers": {
		'X-RapidAPI-Key': '62abc14505msh2aa8e64b391ef82p18865fjsn92a4ef9e27d5',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
})
}
const data = res.json();
    //muestra los datos en pantalla y cambia elementos necesarios
    //displayData(data);



//Ciudad incial

//window.onload = ()=>{
 //   getWeatherData("Ciudad de México");
//}