export const todoActionTypes = {
    ADD: '[TODO] ADD',
    REMOVE: '[TODO] REMOVE'
}

export const addTodo = (todo) => {
    return {
        type: todoActionTypes.ADD,
        todo
    }
}

export const removeTodo = (index) => {
    return {
        type: todoActionTypes.REMOVE,
        index
    }
}