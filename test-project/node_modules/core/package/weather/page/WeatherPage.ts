import { Page } from 'playwright';
import { formatCityName } from '../util/WeatherUtils'

export class WeatherPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async getWeather(city: string): Promise<void> {
    const formattedCity = formatCityName(city);  // Use utility function
    await this.page.goto('https://www.weather.com');  // Navigate to weather site
    await this.page.fill('input[name="query"]', formattedCity);  // Enter city
    await this.page.press('input[name="query"]', 'Enter');  // Submit search
    console.log(`Fetching weather for ${formattedCity}`);
  }
}
