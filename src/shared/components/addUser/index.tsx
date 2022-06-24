import './index.css'

import { Link } from 'react-router-dom'
import api from '../../../services/api'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"


const validationFormUser = yup.object().shape({
    name: yup.string().required(),
    status: yup.string().required()
})

export default function Modal() {
    const { register, handleSubmit } = useForm({
        resolver: yupResolver(validationFormUser)
    })

    const addUser = (data: any) => api.post('users', data)
        .then(() => {
            
        })
        .catch(() => {
            
        })

    return (
        
        <form onSubmit={handleSubmit(addUser)}>
            <input type="text" placeholder='Name' required className='input-form' {...register("name")}/>

            <select id="status" required className='input-form' {...register("status")}>
                <option value="Online" className='option'>Online</option>
                <option value="Offline" className='option'>Offline</option>
            </select>
            {/* <input type="text" placeholder='Status' required className='input-form' {...register("status")}/> */}

            <button className='button-form add' type='submit'>ADD USER</button>     
        </form>
        
    )
}