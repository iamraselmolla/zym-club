import React from 'react';
import './ShowZym.css'

const ShowZym = (props) => {
    console.log(props)
    const {img, name, age, description, time} = props.zym;
let newDes;
    if(description.length>17){
       const splitDes =  description.split(' ').slice(0,18).join(' ')
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
            <button className='addlistbtn'>Add to List</button>
        </div>
    );
};


export default ShowZym;