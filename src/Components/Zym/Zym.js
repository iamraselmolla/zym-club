import React, { useEffect, useState } from 'react';
import ShowZym from './ShowZym/ShowZym';
import './Zym.css'

const Zym = () => {
    const [zym, setZym] = useState([]);

    useEffect(()=>{
        fetch('zym.json')
        .then(res=> res.json())
        .then(data => setZym(data))
    },[])
    return (
        <div className='zym'>
            {zym.map(singleZym => <ShowZym key={singleZym.name} zym ={singleZym}></ShowZym>)}
        </div>
    );
};

export default Zym;