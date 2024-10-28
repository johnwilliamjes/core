import { Page } from 'playwright';
export declare class WeatherPage {
    private page;
    constructor(page: Page);
    getWeather(city: string): Promise<void>;
}
