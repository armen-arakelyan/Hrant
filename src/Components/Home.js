import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home=()=>{

    const [titles,setTitles]=useState([]);

    const getData=async()=>{
        await axios.get('http://localhost:9000/')
        .then(res=>setTitles(res.data))
    }

    const deleteData=data=>{
        axios.post('http://localhost:9000/deleteTodo',{todoId:data})
    }

    useEffect(()=>{
        getData()
    },[titles])

    return(
        <div className="cards">
            {titles.map((v,i)=><div className="card" key={i}>
                <div className="card-img">
                <img src="https://images.unsplash.com/photo-1616945455497-3739f67df172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="img" />
                </div>
                <div className="card-content">
                <p>{v.title}</p>
                <a className="delete_btn" onClick={()=>deleteData(v._id)}>&#10006;</a>
                </div>
            </div>)}
        </div>
    )
}

export default Home;