import * as fromAction from './action';

const initialState = {
    todos: [
        { text: 'Learn React Native', completed: false },
        { text: 'Remove completed tasks 1', completed: false },
        { text: 'Remove completed tasks 2', completed: false },
        { text: 'Remove completed tasks 3', completed: false },
    ]
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case fromAction.ActionTypes.ADD:
            return {
                ...state,
                todos: [...state.todos, { text: action.text.trim(), completed: false }]
            }

        case fromAction.ActionTypes.TOGGLE_COMPLETED:
            return {
                ...state,
                todos: state.todos.map((value, index) => {
                    if(index == action.index) {
                        return { ...value, completed: !value.completed };
                    }
                    return value;
                })
            }

        case fromAction.ActionTypes.REMOVE:
            return {
                ...state,
                todos: state.todos.filter((value, index) => index != action.index)
            }

        default:
            return state
    }
}