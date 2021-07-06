import { useState } from "react";
import { v1 } from "uuid";
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
        case 'ADD-TODOLIST':
            let newTodolists = state.push({id: v1(),filter: 'all', title: action.title})
            return state;
        default:
            throw new Error("I don't understand this type")
    }
 }