"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherPage = void 0;
const WeatherUtils_1 = require("../util/WeatherUtils");
class WeatherPage {
    page;
    constructor(page) {
        this.page = page;
    }
    async getWeather(city) {
        const formattedCity = (0, WeatherUtils_1.formatCityName)(city); // Use utility function
        await this.page.goto('https://www.weather.com'); // Navigate to weather site
        await this.page.fill('input[name="query"]', formattedCity); // Enter city
        await this.page.press('input[name="query"]', 'Enter'); // Submit search
        console.log(`Fetching weather for ${formattedCity}`);
    }
}
exports.WeatherPage = WeatherPage;
