import { Page } from 'playwright';
import { formatSearchQuery } from '../util/SearchUtils';

export class GoogleSearchPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async search(query: string): Promise<void> {
    const formattedQuery = formatSearchQuery(query);  // Use utility function
    await this.page.goto('https://www.google.com');    // Navigate to Google
    await this.page.fill('input[name="q"]', formattedQuery); // Enter query
    await this.page.press('input[name="q"]', 'Enter');  // Submit search
    console.log(`Searching for ${formattedQuery}`);
  }
}
