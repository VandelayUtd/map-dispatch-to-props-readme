export const addToDo = (todo) => {
    return ({
        type: "ADD_TODO", 
        todo: todo
    })
}