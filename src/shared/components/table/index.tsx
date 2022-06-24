import { useEffect, useState } from 'react'
import { Pen } from '../../../assets/img/icon/pen'
import { Trash } from '../../../assets/img/icon/trash'

import api from '../../../services/api'

import './index.css'
export default function Table() {
    interface User {
        id: number,
        name: string,
        status: string
    }

    const [ users, setUsers ] = useState([])

    useEffect(() => {
        api.get('users')
            .then(response => {
                setUsers(response.data)
                // console.log(response.data)
            })
            .catch(() => {

            })
    }, [])
    

    return (
        <div className="container-table">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>status</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user: User, key) => {
                        return (
                            <tr>
                                <td>{user.id < 10 ? `0${user.id}` : user.id}</td>
                                <td>{user.name}</td>
                                
                                <td>
                                    <div className='status-container'>
                                        <div className={ !(user.status == 'Online') ? 'status-offline' : 'status-online'}>
                                            {user.status}
                                        </div>
                                    </div>
                                </td>
                                <td className='button-container'>
                                    <button className='btn-table'>
                                        <Trash/>
                                    </button>
                                    <button className='btn-table'>
                                        <Pen/>
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}