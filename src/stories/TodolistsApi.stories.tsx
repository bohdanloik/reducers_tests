import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default {
   title: 'API'
}

const settings = {
    withCredentials: false
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        axios.get('http://localhost:8080/api/todolists', settings)
            .then((res) => {
                setState(res.data);
            });
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
 
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        axios.post('http://localhost:8080/api/todolists', { title: "Todolist" }, settings)
            .then((res) => {
                setState(res.data);
            });
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        axios.get('http://localhost:8080/api/todolists', settings)
            .then((res) => {
                if (res.data && res.data.length) {
                    const todolistId = res.data[res.data.length - 1].id;
                    axios.delete(`http://localhost:8080/api/todolists/${todolistId}`, settings)
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
        axios.get('http://localhost:8080/api/todolists', settings)
            .then((res) => {
                if (res.data && res.data.length) {
                    const todolistId = res.data[res.data.length - 1].id;
                    axios.put(`http://localhost:8080/api/todolists/${todolistId}`, { title: 'New Updated Tite' }, settings)
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
