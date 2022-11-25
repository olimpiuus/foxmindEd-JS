"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ForecastDays_getDayOfDate, _ForecastDays_checkForSameDate, _ForecastDays_addNewDay, _ForecastDays_addToExistingDay;
class CityChoice {
    constructor(obj, searchOptions, id) {
        this.addToHtml = () => {
            const choice = document.createElement('li');
            choice.classList.add('search__option');
            choice.textContent = this.fullLocationName;
            this.searchOptions.append(choice);
            choice.dataset.id = this._id.toString();
        };
        this.fullLocationName = obj.name + ', ' + obj.state + ', ' + obj.country;
        if (!obj.state) {
            this.fullLocationName = obj.name + ', ' + obj.country;
        }
        this.searchOptions = searchOptions;
        this._id = id;
    }
}
class SelectedCity {
    constructor(obj) {
        this.getLocation = () => {
            const lat = this.obj.lat;
            const lon = this.obj.lon;
            return { lat, lon };
        };
        this.obj = obj;
        this.fullName = obj.name + ', ' + obj.state + ', ' + obj.country;
        this.shortName = obj.name + ', ' + obj.country;
        if (!obj.state) {
            this.fullName = this.shortName;
        }
    }
}
class Search {
    constructor() {
        this._getCity = (city) => __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=c5f264c664d81a1e7be32d965a4fa209`);
            const answer = yield response.json();
            return answer;
        });
        this._addDataListToSearch = (cities) => {
            const fillChoices = () => {
                this.options.innerHTML = '';
                cities.forEach((city, index) => {
                    const cityChoice = new CityChoice(city, this.options, index);
                    cityChoice.addToHtml();
                });
            };
            this._clearSearch;
            this.options.style.display = 'block';
            fillChoices();
        };
        this._clearSearch = () => {
            this.options.innerHTML = '';
        };
        this._hideSearch = () => {
            this.options.style.display = 'none';
        };
        this.clearAndHideSearch = () => {
            this._clearSearch();
            this._hideSearch();
        };
        this.startSearchFn = () => {
            let delay;
            let searchValue;
            this.input.addEventListener('keyup', () => {
                if (delay) {
                    clearTimeout(delay);
                }
                delay = setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                    searchValue = this.input.value;
                    const cities = yield this._getCity(searchValue);
                    this._addDataListToSearch(cities);
                    this.cities = cities;
                }), 500);
            });
        };
        this.input = document.querySelector('#searchLocation');
        this.options = document.querySelector('.search__options');
        this.cities = [];
    }
}
class ForecastDay {
    constructor(obj, date) {
        this.addInfo = (extra) => {
            this.minTemps.push(extra.main.temp_min);
            this.maxTemps.push(extra.main.temp_max);
            this.icons.push(extra.weather[0].icon);
            this.descriptions.push(extra.weather[0].main);
        };
        this._mostFrequentValue = (arr) => {
            return arr.sort((a, b) => arr.filter(v => v === a).length
                - arr.filter(v => v === b).length).pop();
        };
        this.getRenderValues = () => {
            const icon = this._mostFrequentValue(this.icons);
            const description = this._mostFrequentValue(this.descriptions);
            const minTemp = Math.min(...this.minTemps);
            const maxTemp = Math.max(...this.maxTemps);
            return {
                icon,
                description,
                minTemp,
                maxTemp
            };
        };
        this.date = date;
        this.minTemps = [obj.main.temp_min];
        this.maxTemps = [obj.main.temp_max];
        this.icons = [obj.weather[0].icon];
        this.descriptions = [obj.weather[0].main];
    }
}
class ForecastDays {
    constructor() {
        _ForecastDays_getDayOfDate.set(this, (dateText) => {
            const date = new Date(dateText);
            const day = date.getDate();
            return day;
        });
        _ForecastDays_checkForSameDate.set(this, (date) => {
            let state = false;
            this.list.forEach((elem) => {
                if (elem.date === date) {
                    state = true;
                }
            });
            return state;
        });
        _ForecastDays_addNewDay.set(this, (obj) => {
            const forecastDay = new ForecastDay(obj, __classPrivateFieldGet(this, _ForecastDays_getDayOfDate, "f").call(this, obj.dt_txt));
            this.list.push(forecastDay);
        });
        _ForecastDays_addToExistingDay.set(this, (date, obj) => {
            if (this.list.length === 1) {
                this.list[0].addInfo(obj);
            }
            else {
                let dayIndex;
                dayIndex = this.list.reduce((_accumulator, elem, index) => {
                    if (elem.date === date) {
                        return index;
                    }
                });
                this.list[dayIndex].addInfo(obj);
            }
        });
        this.addForecastDay = (obj) => {
            const objDate = __classPrivateFieldGet(this, _ForecastDays_getDayOfDate, "f").call(this, obj.dt_txt);
            const today = new Date().getDate();
            if (objDate === today) {
                return;
            }
            if (__classPrivateFieldGet(this, _ForecastDays_checkForSameDate, "f").call(this, objDate)) {
                __classPrivateFieldGet(this, _ForecastDays_addToExistingDay, "f").call(this, objDate, obj);
            }
            else {
                __classPrivateFieldGet(this, _ForecastDays_addNewDay, "f").call(this, obj);
            }
        };
        this.list = [];
    }
}
_ForecastDays_getDayOfDate = new WeakMap(), _ForecastDays_checkForSameDate = new WeakMap(), _ForecastDays_addNewDay = new WeakMap(), _ForecastDays_addToExistingDay = new WeakMap();
class GetWeatherObjts {
    constructor() {
        this.weatherNow = (location) => __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=c5f264c664d81a1e7be32d965a4fa209`);
            const answer = yield response.json();
            return answer;
        });
        this.weatherFuture = (location) => __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&appid=c5f264c664d81a1e7be32d965a4fa209`);
            const answer = yield response.json();
            const forecast = new ForecastDays;
            answer.list.forEach((element) => {
                forecast.addForecastDay(element);
            });
            return forecast.list;
        });
    }
}
class RenderWeather {
    constructor() {
        this._transformTemp = (temp) => (temp - 273).toFixed(0);
        this._getWeekday = (index) => {
            const nameWeekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            const today = new Date().getDay();
            const futureWeekDay = (today + index + 1) % 7;
            return nameWeekDays[futureWeekDay];
        };
        this.renderWeatherNow = (weatherNowObj, locationName) => {
            const imgId = weatherNowObj.weather[0].icon;
            const descriptionWeather = weatherNowObj.weather[0].main;
            const imgURL = "http://openweathermap.org/img/w/" + imgId + ".png";
            this.weatherNowHtml.innerHTML = '';
            this.weatherNowHtml.insertAdjacentHTML("afterbegin", `
      <div class="now__temperature">
        <span class="now__temperature_real">${this._transformTemp(weatherNowObj.main.temp)}°C</span>
        <p class="now__temperature_feels">Feels like <span id="feelsLikeTemp">${this._transformTemp(weatherNowObj.main.feels_like)}°C</span></p>
      </div>
      <div class="now__weather">
        <div class="now__text-weather">${descriptionWeather}</div>
        <div class="now__location">${locationName}</div>
      </div>
      <img class="now__img" src="${imgURL}" alt="${descriptionWeather}">
    `);
        };
        this.renderFutureWeather = (weatherFutureArr) => {
            this.weatherFutureHtml.innerHTML = '';
            weatherFutureArr.forEach((day, index) => {
                const values = day.getRenderValues();
                const imgId = values.icon;
                const imgURL = "http://openweathermap.org/img/w/" + imgId + ".png";
                const descriptionWeather = values.description;
                this.weatherFutureHtml.insertAdjacentHTML('beforeend', `
      <li class="weather__next-day next-day">
        <span class="next-day__text">${this._getWeekday(index)}</span>
        <figure class="next-day__weather-description">
            <img class="weather-description__img" src="${imgURL}" alt="${descriptionWeather}" >
            <figcaption class="weather-description__text">${descriptionWeather}</figcaption>
        </figure>
        <div class="next-day__temp-block">
            <span class="next-day__temp-max">${this._transformTemp(values.maxTemp)}°C</span>
            <span class="next-day__temp-min">${this._transformTemp(values.minTemp)}°C</span>
        </div>
      </li>
      `);
            });
        };
        this.weatherNowHtml = document.querySelector('.weather__now');
        this.weatherFutureHtml = document.querySelector('.weather__days-list');
    }
}
class WeatherApi {
    constructor() {
        this.start = () => {
            const selectedLocation = document.querySelector('#selectedCity');
            this.search.startSearchFn();
            this.search.options.addEventListener('click', (e) => __awaiter(this, void 0, void 0, function* () {
                if (!(e.target instanceof HTMLElement)) {
                    return;
                }
                const element = e.target;
                const elementId = parseInt(element.dataset.id);
                const cityObj = this.search.cities[elementId];
                const selectedCity = new SelectedCity(cityObj);
                this.search.input.value = selectedCity.fullName;
                selectedLocation.textContent = selectedCity.fullName;
                const weatherNow = yield this.weatherInfo.weatherNow(selectedCity.getLocation());
                this.search.clearAndHideSearch();
                this.render.renderWeatherNow(weatherNow, selectedCity.shortName);
                const futureWeather = yield this.weatherInfo.weatherFuture(selectedCity.getLocation());
                this.render.renderFutureWeather(futureWeather);
            }));
        };
        this.search = new Search;
        this.render = new RenderWeather;
        this.weatherInfo = new GetWeatherObjts;
    }
}
const weather = new WeatherApi;
weather.start();
