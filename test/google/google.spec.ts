import { find, have, perform, should, by } from 'selenidejs';
import { browser } from '../base';


describe('Google', () => {
    it('should search', async () => {
        await browser.open('https://google.com/ncr');

        await browser.element(by.name('q')).setValue('selenium').then(perform.pressEnter);

        await browser.all('#ires .g').should(have.size(12))
            .then(find.first)
            .then(should.match(have.text('Selenium automates browsers')))
            .then(find.element('.r>a'))
            .then(perform.click);

        await browser.should(have.title('Selenium - Web Browser Automation'))
    });


    /* OR:

    it('should search', async () => {
        await browser.open('https://google.com/ncr');

        const query = browser.element(by.name('q'));
        await query.setValue('selenium');
        await query.pressEnter();

        const results = browser.all('#ires .g');
        await results.should(have.size(14));
        await results.first.should(have.text('Selenium automates browsers'));
        await results.first.element('.r>a').click();

        await browser.should(have.title('Selenium - Web Browser Automation'))
    });

    */
});