import { be, have, perform, by } from 'selenidejs';
import { browser } from '../../base';

export class TodoMvc {
    
    tasks = browser.all('#todo-list>li');

    async open() {
        await browser.open('http://todomvc.com/examples/emberjs/');
    }

    async add(...taskTexts: string[]) {
        for (const text of taskTexts) {
            await browser.element('#new-todo')
                .type(text)
                .then(perform.pressEnter);
        }
    }

    async assertTexts(...taskTexts: string[]) {
        await this.tasks.filteredBy(be.visible).should(have.exactTexts(...taskTexts));
    }

    async filterActive() {
        await browser.element(by.linkText('Active')).click();
    }

    async filterCompleted() {
        await browser.element(by.linkText('Completed')).click();
    }

    async filterAll() {
        await browser.element(by.linkText('All')).click();
    }

    async toggle(taskText: string) {
        await this.tasks.elementBy(have.exactText(taskText)).element('.toggle').click();
    }
}