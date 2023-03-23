import { test, expect, devices } from '@playwright/test'

let homeURL = "http://localhost:3000/";
let Search = "http://localhost:3000/Search";
let SearchRent = "http://localhost:3000/search?purpose=for-rent"

test.use({
       browserName: "chromium",
       ...devices['Desktop Chrome']
})

test.beforeAll(async () => {
    console.log('Before tests');
});

test.afterAll(async () => {
    console.log('After tests');
});

test.describe('Header area', () => {
    test('Title tag', async({ page }) => {
        await page.goto(homeURL)

        await expect(page).toHaveTitle('FindAPlace');
    })

    test('Favicon tag', async ({ page }) => {
        await page.goto(homeURL)

        const linkTag = page.locator('link[rel="icon"]');
        await expect(linkTag).toHaveAttribute('href', '/favicon.ico')
    })

    test('Meta tag', async ({ page }) => { 
        await page.goto(homeURL)
        
        const metaDescriptionOne = page.locator('meta[name="author"]')
        await expect(metaDescriptionOne).toHaveAttribute("content", "Advanced Dynamic Content Project")

        const metaDescriptionTwo = page.locator('meta[property="title"]');
        await expect(metaDescriptionTwo).toHaveAttribute('content', 'FindAPlace')

        const metaDescriptionThree = page.locator('meta[property="description"]');
        await expect(metaDescriptionThree).toHaveAttribute('content', 'FindAPlace showcases live real estate listings that can be sorted in all sorts of ways!')
    })
})

test.describe('Navigation area', () => {
    test('Check route to search page', async({ page }) => {
        await page.goto(homeURL)
        await page.click('text=Explore Renting');
        await expect(page).toHaveURL(SearchRent)
    })
})