import { useState } from "react";
import { v1 } from "uuid";
import { FilterValuesType, TodolistType } from "../App";

 export type ActionType = RemoveTodolistActionType | AddTodolistActionType | ChangeTodolistTitleActionType | ChangeTodolistFilterActionType ;

 export type RemoveTodolistActionType = {
    type: 'REMOVE-TODOLIST'
    id: string 
 }
 export type AddTodolistActionType = {
    type: 'ADD-TODOLIST'
    title: string
    id: string
 }
 export type ChangeTodolistTitleActionType = {
    type: 'CHANGE-TODOLIST-TITLE'
    id: string 
    title: string
 }
 export type ChangeTodolistFilterActionType = {
    type: 'CHANGE-TODOLIST-FILTER'
    id: string 
    filter: FilterValuesType
 }

 export const todolistsReducer = (state: Array<TodolistType>, action: ActionType) => {
    switch (action.type) {
        case 'REMOVE-TODOLIST':
            
            let newtodolists = state.filter((i) => i.id !== action.id);
            return newtodolists;
        case 'ADD-TODOLIST':
            let newTodolists = state.push({id: action.id,filter: 'all', title: action.title})
            return [...state];
        case 'CHANGE-TODOLIST-TITLE':
            let newState = state.find((i) => i.id === action.id);
            if(newState) {
                newState.title = action.title;
            }
            return [...state];
        case 'CHANGE-TODOLIST-FILTER':
             let filterChange = state.find((i) => i.id === action.id);
            if(filterChange) {
                filterChange.filter = action.filter;
            }
            return [...state];
        default:
            throw new Error("I don't understand this type")
    }
 }

 export const RemoveTodolistAC = (todolistId: string): RemoveTodolistActionType => {
    return { type: 'REMOVE-TODOLIST', id: todolistId}
 }
 export const addTodolistAC = (todolistTitle: string): AddTodolistActionType => {
    return { type: 'ADD-TODOLIST', title: todolistTitle, id: v1()}
 }
 export const ChangeTodolistTitleAC = (todolistTitle: string, todolistId: string): ChangeTodolistTitleActionType => {
    return { type: 'CHANGE-TODOLIST-TITLE', title: todolistTitle, id: todolistId}
 }
 export const ChangeTodolistFilterAC = (todolistFilter: FilterValuesType, todolistId: string): ChangeTodolistFilterActionType => {
    return { type: 'CHANGE-TODOLIST-FILTER', filter: todolistFilter, id: todolistId}
 }