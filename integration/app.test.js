describe('addItemForm', () => {
    it('base example, visually looks correct', async () => {
        // APIs from jest-puppeteer
        await page.goto('http://localhost:6006/iframe.html?id=example-additemform--exmple-add-item-form');
        const image = await page.screenshot();
 
        // API from jest-image-snapshot
        expect(image).toMatchImageSnapshot();
    });
 });

 describe('EditableSpan', () => {
    it('base example, visually looks correct', async () => {
        // APIs from jest-puppeteer
        await page.goto('http://localhost:6006/iframe.html?id=example-editablespan--editable-span-exmple');
        const image = await page.screenshot();
 
        // API from jest-image-snapshot
        expect(image).toMatchImageSnapshot();
    });
 });

 describe('AppWithRedux', () => {
    it('base example, visually looks correct', async () => {
        // APIs from jest-puppeteer
        await page.goto('http://localhost:6006/iframe.html?id=example-appwithredux--app-with-redux-exmple');
        const image = await page.screenshot();
 
        // API from jest-image-snapshot
        expect(image).toMatchImageSnapshot();
    });
 });
 