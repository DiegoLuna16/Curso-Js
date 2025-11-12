import { Todo } from "../todos/models/todo.model";

const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending'
}

const state = {
    todos: [
        new Todo('Prieda del alma'),
        new Todo('Prieda del infinito'),
        new Todo('Prieda del tiempo')
    ],
    filter: Filters.All
}

const initStore = () => {
    console.log(state);
    console.log('InitStore');
}

export default {
    initStore,
}