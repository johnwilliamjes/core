import { Page } from 'playwright';
export declare class GoogleSearchPage {
    private page;
    constructor(page: Page);
    search(query: string): Promise<void>;
}
