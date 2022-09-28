import React from 'react';
import './ShowZym.css'

const chnageBtntxt = (e) => {
    if(e.target.classList.contains('addlistbtn')){
        e.target.innerText = 'Added';
        e.target.classList.add('added-list');
        e.target.setAttribute('disable', true)
    }
    
}
const ShowZym = (props) => {
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
            <button onClick={(e) => chnageBtntxt(e)} className='addlistbtn'>Add to List</button>
        </div>
    );
};


export default ShowZym;