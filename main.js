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
  
  async function search(query) {
    try {
      const response = await fetch(`${api.url}?q=${query}&appid=${api.key}&lang=es`);
      const data = await response.json();
      card.style.display = 'block';
      city.innerHTML = `${data.name}, ${data.sys.country}`;
      data.innerHTML = (new Date()).toLocaleDateString();
      temp.innerHTML = `${toCelsius(data.main.temp)}c`;
      weather.innerHTML = data.weather[0].description;
      updateImages(data);
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
  const searchbox = document.getElementById('searchbox');
  searchform.addEventListener('submit', onSubmit, true);

