import { useState } from "react";
import { v1 } from "uuid";
import { TasksStateType } from "../App";
import { AddTodolistActionType } from "./todolists-reducer";

 export type ActionType = RemoveTaskActionType | AddTaskActionType | ChangeTaskStatusActionType | ChangeTaskTitleActionType | AddTodolistActionType;

 export type RemoveTaskActionType = {
    type: 'REMOVE-TASK'
    id: string 
    todolistId: string
 }
 export type AddTaskActionType = {
    type: 'ADD-TASK'
    title: string 
    todolistId: string
 }
 export type ChangeTaskStatusActionType = {
    type: 'CHANGE-TASK-STATUS'
    isDone: boolean 
    todolistId: string
    id: string
 }
 export type ChangeTaskTitleActionType = {
    type: 'CHANGE-TASK-TITLE'
    title: string 
    todolistId: string
    id: string
 }


 export const tasksReducer = (state: TasksStateType, action: ActionType) => {
    switch (action.type) {
        case 'REMOVE-TASK': {
            let stateCopy = {...state};
            let tasks = state[action.todolistId];
            let filteredTasks = tasks.filter((t) => t.id !== action.id);
            stateCopy[action.todolistId] = filteredTasks;
            return stateCopy;
        }
        case 'ADD-TASK': {
            let stateCopy = {...state};
            let task = {id: v1(), title: action.title, isDone: false };
            let todolistsTasks = state[action.todolistId];
            stateCopy[action.todolistId] = [task, ...todolistsTasks];
            return stateCopy;
        }
        case 'CHANGE-TASK-STATUS': {
            let stateCopy = {...state};
            let updatedTodolistsTasks = stateCopy[action.todolistId];
            let updatedTask = updatedTodolistsTasks.find((t) => t.id === action.id);
            if(updatedTask) {
                updatedTask.isDone = action.isDone;
            }
            return stateCopy;
        }
        case 'CHANGE-TASK-TITLE': {
            let stateCopy = {...state};
            let updatedTodolistsTasks = state[action.todolistId];
            let updatedTask = updatedTodolistsTasks.find((t) => t.id === action.id);
            if(updatedTask) {
                updatedTask.title = action.title;
            }
            return stateCopy;
        }
        case 'ADD-TODOLIST':
            let stateCopy = {...state};
            stateCopy[action.id] = [];
            return stateCopy;

        default:
            throw new Error("I don't understand this type")
    }
 }

 export const removeTaskAC = (id: string, todolistId: string): RemoveTaskActionType => {
    return { type: 'REMOVE-TASK', id: id, todolistId: todolistId}
 }
 export const addTaskAC = (title: string, todolistId: string): AddTaskActionType => {
    return { type: 'ADD-TASK', title: title, todolistId: todolistId}
 }
 export const changeTaskStatusAC = (id: string, value: boolean, todolistId: string, ): ChangeTaskStatusActionType => {
    return { type: 'CHANGE-TASK-STATUS', isDone: value, todolistId: todolistId, id: id}
 }
 export const changeTaskTitleAC = (id: string, title: string, todolistId: string, ): ChangeTaskTitleActionType => {
    return { type: 'CHANGE-TASK-TITLE', title: title, todolistId: todolistId, id: id}
 }
//  export const addTodolistAC = (todolistTitle: string ): AddTodolistActionType => {
//     return { type: 'ADD-TODOLIST', title: todolistTitle}
//  }
