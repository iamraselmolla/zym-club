import React from 'react';
import './ShowZym.css'
let totalTime = [];


const ShowZym = (props) => {
    const calTotalTime = (getTime,e) => {
        totalTime.push(parseInt(getTime))
        const totalCalculateTime = totalTime.reduce((pre,curr) => pre + curr);
    
        document.getElementById('exercise-time').textContent = totalCalculateTime;
        if(e.target.classList.contains('addlistbtn')){
            e.target.textContent = 'Added';
        }
    }
    const {img, name, age, description, time} = props.zym;
let newDes;
    if(description.length>12){
       const splitDes =  description.split(' ').slice(0,11).join(' ')
        newDes = splitDes + '.......'
    }else{
        newDes = description;
    }
    return (
        <div className='zym-details'>
            <img src={img} alt="" />
            <h4>    {name}</h4>
            <p>{newDes}</p>
            <h5>For age: <b> {age}</b></h5>
            <h5>Time require: <b> {time}s</b></h5>
            <button onClick={(e) => calTotalTime(time,e)} className='addlistbtn'>Add to List</button>
        </div>
    );
};


export default ShowZym;