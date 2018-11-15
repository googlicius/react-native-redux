export const ActionTypes = {
    ADD: '[TODO] Add todo',
    REMOVE: '[TODO] Remove todo',
    TOGGLE_COMPLETED: '[TODO] Toggle completed'
}

export const AddTodo = (text) => {
    return { type: ActionTypes.ADD, text };
}

export const RemoveTodo = (index) => {
    return { type: ActionTypes.REMOVE, index };
}

export const ToggleCompleted = (index) => {
    return { type: ActionTypes.TOGGLE_COMPLETED, index }
}