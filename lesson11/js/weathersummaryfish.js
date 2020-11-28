const weatherSummary = "https://api.openweathermap.org/data/2.5/weather?lat=42.0380399&lon=-111.4048681&units=imperial&APPID=11fee94c13af8bc2e5449df290a1fcee";
fetch(weatherSummary)
    .then((response) => response.json())
    .then((jsObject) => {


        const condition = document.querySelector('#condition');
        const temp = document.querySelector('#temp');
        const high = document.querySelector('#high');
        const humidity = document.querySelector('#humidity');
        const speed = document.querySelector('#speed');

        condition.textContent = `${jsObject.weather[0].main}`;
        temp.textContent = `${jsObject.main.temp} °F`;
        high.textContent = `${jsObject.main.temp_max} °F`;
        humidity.textContent = `${jsObject.main.humidity}%`;
        speed.textContent = `${jsObject.wind.speed} mph`;

    });

