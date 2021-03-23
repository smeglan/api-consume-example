import { ITodo } from './../interfaces/todo';

export const getTodoList = (callBack: (data: [], error?: string) => void) => {
    fetch('https://jsonplaceholder.typicode.com/users/1/todos')
        .then(response => response.json())
        .then(json => callBack(json))
        .catch(e => console.log("Error => ", e))
}

export const addTodo = (todo: string, check: boolean, callBack: (data: ITodo) => void) => {
    fetch('https://jsonplaceholder.typicode.com/users/1/todos/', {
        method: 'POST',
        body: JSON.stringify({
            title: todo,
            completed: check,
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => callBack(json));
}

export const deleteTodo = (id: number, callBack: () => void) => {
    fetch('https://jsonplaceholder.typicode.com/todos/' + id, {
        method: 'DELETE',
    })
        .then(value => callBack())
}