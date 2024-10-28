"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleSearchPage = void 0;
const SearchUtils_1 = require("../util/SearchUtils");
class GoogleSearchPage {
    page;
    constructor(page) {
        this.page = page;
    }
    async search(query) {
        const formattedQuery = (0, SearchUtils_1.formatSearchQuery)(query); // Use utility function
        await this.page.goto('https://www.google.com'); // Navigate to Google
        await this.page.fill('input[name="q"]', formattedQuery); // Enter query
        await this.page.press('input[name="q"]', 'Enter'); // Submit search
        console.log(`Searching for ${formattedQuery}`);
    }
}
exports.GoogleSearchPage = GoogleSearchPage;
