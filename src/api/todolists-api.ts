import axios from 'axios';

const settings = {
    withCredentials: false
}

export type TodolistType = {
    addedDate: string
    order: number
    title: string
    id: string
    tasks: Array<any>
}
type CreateTodolistResponsType = {
    resultCode: number
    messages: string[]
    data: {
        item: TodolistType
    }
}

export const todolistsAPI = {
    getTodolist() {
        let promise = axios.get<Array<TodolistType>>('http://localhost:8080/api/todolists', settings);
        return promise;
    },
    createTodolist(title: string) {
        let promise = axios.post<CreateTodolistResponsType>('http://localhost:8080/api/todolists', {title}, settings);
        return promise;
    },
    deleteTodolist(todolistId: string) {
        let promise = axios.delete(`http://localhost:8080/api/todolists/${todolistId}`, settings)
        return promise;
    },
    updateTodolist(todolistId: string, title: string) {
        let promise = axios.put(`http://localhost:8080/api/todolists/${todolistId}`, {title}, settings)
        return promise;
    }
}
