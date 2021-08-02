import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { todolistsAPI } from '../api/todolists-api'

export default {
   title: 'API'
}

const settings = {
    withCredentials: false
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistsAPI.getTodolist()
        .then ((res) => {
                setState(res.data);
            })
    }, [])
 
    return <div> {JSON.stringify(state)}</div>
 }
 
 export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistsAPI.createTodolist('New-New Todolist')
            .then((res) => {
                setState(res.data);
            });
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistsAPI.getTodolist()
            .then((res) => {
                if (res.data && res.data.length) {
                    const todolistId = res.data[res.data.length - 1].id;
                    todolistsAPI.deleteTodolist(todolistId)
                        .then((res) => {
                            setState(res.data);
                        });
                }
            });
    }, [])
    return <div> {JSON.stringify(state)}</div>
}

export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistsAPI.getTodolist()
            .then((res) => {
                if (res.data && res.data.length) {
                    const todolistId = res.data[res.data.length - 1].id;
                    todolistsAPI.updateTodolist(todolistId, 'Updated Todolist')
                        .then((res) => {
                            setState(res.data)
                        })
                }
            });
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
 


export const GetTodolistsTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        axios.get('http://localhost:8080/api/todolists', settings)
            .then((res) => {
                if (res.data && res.data.length) {
                    const todolistId = res.data[res.data.length - 1].id;
                    axios.get(`http://localhost:8080/api/todolists/${todolistId}/tasks`, settings)
                        .then((res) => {
                            setState(res.data)
                        })
                }
            });
    }, [])

   return <div> {JSON.stringify(state)}</div>
}

// export const CreateTodolistTask = () => {
//     const [state, setState] = useState<any>(null)
//     useEffect(() => {
//         axios.get('http://localhost:8080/api/todolists', settings)
//             .then((res) => {
//                 if (res.data && res.data.length) {
//                     const todolistId = res.data[res.data.length - 1].id;
//                     axios.get(`http://localhost:8080/api/todolists/${todolistId}/tasks`, settings)
//                         .then((res) => {
//                             debugger;
//                             setState(res.data)
//                         })
//                 }
//             });
//         axios.post('http://localhost:8080/api/todolists', { title: "newTodolist" }, settings)
//             .then((res) => {
//                 setState(res.data);
//             });
//     }, [])

//     return <div> {JSON.stringify(state)}</div>
// }
