const forecast = document.getElementById("forecast");

const enumIcon = {
  Sunny: "&#x2600", // ☀
  "Partly sunny": "&#x26C5",
  Overcast: "&#x2601", // ☁
  Rain: "&#x2614", // ☂
  Degrees: "&#176", // °
};

function attachEvents() {
  let buttonGetWeather = document.getElementById("submit");
  buttonGetWeather.addEventListener("click", getCity);
}
async function getCity(event) {
  try {
    let city = document.getElementById("location").value;
    let response = await fetch(
      "http://localhost:3030/jsonstore/forecaster/locations"
    );
    let data = await response.json();
    let town = data[data.findIndex((town) => town.name === city)];
    console.log(town);
    let responseTodayForecast = await fetch(
      `http://localhost:3030/jsonstore/forecaster/today/${town.code}`
    );
    let dataTodayForecast = await responseTodayForecast.json();
    getForecast(dataTodayForecast);

    let responseUpcoming = await fetch(
      `http://localhost:3030/jsonstore/forecaster/upcoming/${town.code}`
    );
    let dataUpcoming = await responseUpcoming.json();
    threeDaysForecast(dataUpcoming);
    forecast.style.display = "block";
  } catch (err) {
    forecast.textContent = "Error";
  }
}
async function getForecast(data) {
  let forecastData = data.forecast;
  let icon = enumIcon[forecastData.condition];

  let forecastName = data.name;
  let degreesHigh = forecastData.high;
  let degreesLow = forecastData.low;
  let condition = forecastData.condition;

  let conditionSymbolElement = document.createElement("div");
  conditionSymbolElement.className = "forecasts";
  conditionSymbolElement.innerHTML += `<span class="condition symbol">${icon}</span>`;
  let conditionElement = document.createElement("span");
  conditionElement.className = "condition";
  conditionElement.innerHTML += `<span class="forecast-data">${forecastName}</span>`;
  conditionElement.innerHTML += `<span class="forecast-data">${degreesLow}&#176/${degreesHigh}&#176</span>`;
  conditionElement.innerHTML += `<span class="forecast-data">${condition}</span>`;
  conditionSymbolElement.appendChild(conditionElement);
  forecast.getElementsByTagName("div")[0].appendChild(conditionSymbolElement);
}
async function threeDaysForecast(data) {
  let forecastInfoDiv = document.createElement("div");
  forecastInfoDiv.className = "forecast-info";
  let forecastsFor3Days = data.forecast;
  console.log(forecastsFor3Days);
  Object.entries(forecastsFor3Days).forEach(([condition, value]) => {
    let upcomignSpan = document.createElement("span");
    console.log(value.condition);
    upcomignSpan.className = "upcoming";

    upcomignSpan.innerHTML += `<span class="symbol">${enumIcon[value.condition]}</span>`;

    upcomignSpan.innerHTML += `<span class="forecast-data">${value.low}&#176/${value.high}&#176</span>`;

    upcomignSpan.innerHTML += `<span class="forecast-data">${value.condition}</span>`;

    forecastInfoDiv.appendChild(upcomignSpan);
  });
  forecast.getElementsByTagName("div")[3].appendChild(forecastInfoDiv);
}

attachEvents();
