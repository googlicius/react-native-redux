import { todoActionTypes } from './todo-list.action';

const initialState = {
    todos: ['Click to remove', 'Learn React Native', 'Write code', 'Ship app']
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case todoActionTypes.ADD:
            return {
                ...state,
                todos: [...state.todos, action.todo]
            }

        case todoActionTypes.REMOVE:
            return {
                ...state,
                todos: state.todos.filter((todo, index) => index != action.index)
            }

        default:
            return state;
    }
}