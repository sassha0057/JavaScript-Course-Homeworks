const cityInput = document.querySelector('#cityInput');
const searchButton = document.querySelector('#searchButton');
const result = document.querySelector('#getWeather');


async function getCoordinates(cityName) {
    const response = await fetch(`${GEO_URL}?q=${cityName}&limit=1&appid=${API_KEY}`);
    const data = await response.json();

    if (!data || data.length === 0) {
        result.innerHTML = `<p class="error">Лошара! Такого города нету</p>`;
        cityInput.value = '';
    }

    const {lat, lon, name} = data[0];

    return {lat, lon, name};
}

async function getWeather(lat, lon) {
    const response = await fetch(`${WEATHER_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=ru`);
    const data = await response.json();

    return data;
}

searchButton.addEventListener('click', async () => {
    const cityName = cityInput.value.trim();

    if (!cityName) return;
    
    const coords = await getCoordinates(cityName);
    const weather = await getWeather(coords.lat, coords.lon);

    result.innerHTML = '';

    result.innerHTML = `
        <div class="weather-widget">
            <span>
                <p class="weather-widget-title">${weather.name}</p>
                <img src="https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png" alt="icon">
            </span>
            <p class="weather-widget-info">Температура: ${Math.round(weather.main.temp)}°C</p> 
            <p class="weather-widget-info">Влажность: ${weather.main.humidity}%</p> 
            <p class="weather-widget-info">Давление: ${weather.main.pressure}hPa</p> 
            <p class="weather-widget-info">Облачность: ${weather.clouds.all}%</p>
            <p class="weather-widget-info">Скорость ветра: ${weather.wind.speed}m/c</p>   
        </div>
    `;
})
