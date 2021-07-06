import { TodolistType } from "../App";

 type ActionType = {
    type: string
    [key: string]: any
 }

 export const todolistsReducer = (state: Array<TodolistType>, action: ActionType) => {
    switch (action.type) {
        case 'REMOVE-TODOLIST':
            let newtodolists = state.filter((i) => i.id !== action.id);
            return newtodolists;
        default:
            throw new Error("I don't understand this type")
    }
 }