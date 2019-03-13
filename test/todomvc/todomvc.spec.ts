import { TodoMvc } from './pages/todomvc';

describe('TodoMvc', () => {

    it('filters tasks', async () => {
        const todos = new TodoMvc();

        await todos.open();

        await todos.add('a', 'b', 'c');
        await todos.assertTexts('a', 'b', 'c');

        await todos.toggle('b');

        await todos.filterActive();
        await todos.assertTexts('a', 'c');

        await todos.filterCompleted();
        await todos.assertTexts('b');

        await todos.filterAll();
        await todos.assertTexts('a', 'b', 'c');
    });
});
