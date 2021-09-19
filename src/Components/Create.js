import React from 'react';
import axios from 'axios';
import {useForm} from 'react-hook-form';
import { useHistory } from 'react-router';

const Create=()=>{
    const history=useHistory()
    const {register,handleSubmit}=useForm();

    const createTodo=data=>{
        console.log(data)
        axios.post('http://localhost:9000/create',{title:data.title})
        history.push('/')
    }

    return(
        <form className="create" onSubmit={handleSubmit(createTodo)}>
        <input {...register('title')} name="title" />
        <button>Add</button>
       </form>
    )
}

export default Create