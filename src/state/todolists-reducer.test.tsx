import {todolistsReducer} from './todolists-reducer';
import {v1} from 'uuid';
import {TodolistType} from '../App';

test('correct todolist should be removed', () => {
   let todolistId1 = v1();
   let todolistId2 = v1();

   const startState: Array<TodolistType> = [
       {id: todolistId1, title: "What to learn", filter: "all"},
       {id: todolistId2, title: "What to buy", filter: "all"}
   ]

   const endState = todolistsReducer(startState, { type: 'REMOVE-TODOLIST', id: todolistId2})

   expect(endState.length).toBe(1);
   expect(endState[0].id).toBe(todolistId1);
});

test('correct todolist should be added', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();
 
    let newTodolistTitle = "New Todolist";
 
    const startState: Array<TodolistType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]
 
    const endState = todolistsReducer(startState, { type: 'ADD-TODOLIST', title: newTodolistTitle})
 
    expect(endState.length).toBe(3);
    expect(endState[2].title).toBe(newTodolistTitle);
 });
 
 test('correct todolist should change its name', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();
 
    let newTodolistTitle = "New Todolists";
 
    const startState: Array<TodolistType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]
 
    const action = {
        type: 'CHANGE-TODOLIST-TITLE',
        id: todolistId1,
        title: newTodolistTitle
    };
 
    const endState = todolistsReducer(startState, action);
 
    expect(endState[0].title).toBe(newTodolistTitle);
    expect(endState[1].title).toBe("What to buy");
 });
 