import React, { useState } from 'react';
import './ZymAuthor.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ZymAuthor = () => {
    const viewToast = () => toast('Exercise Completed', {position: toast.POSITION.TOP_CENTER})


    let getItem = localStorage.getItem('break-time');
    if(!getItem){
        getItem = "50";
    }
    
const [breakTimeNew, setbreakTime] = useState(`${getItem.slice(0,2)}`);

    
    let breakTime = 0
const showBreakTime = e => {
    if(e.target.classList.contains('break-time')){
        breakTime = e.target.innerText;
        localStorage.setItem('break-time', breakTime);
        const getTimeFromDB = (localStorage.getItem('break-time'))
        let  newTime;
        if(getTimeFromDB){
          newTime= getTimeFromDB.split('').slice(0,2).join('')
        }
        setbreakTime(newTime)
        
    }

}
    return (
        <div className='author-info'>
            <div className="author-details flex">
                <img src="author.jpg" className='author-img' alt="" />
                <div className="author-name-address">
                    <h4>Md Rasel Molla</h4>
                    <small>Bagerhat, Bangladesh</small>
                </div>
            </div>
            <div className="body-strcuture text-white">
                <div>
                    <p className='body-weight'><span className='height'>60</span>KG</p>
                    <p className='weight'>Weight</p>
                </div>
                <div>
                    <p className='body-weight'><span className='height'>5.7</span></p>
                    <p className='weight'>Height</p>
                </div>
                <div>
                    <p className='body-weight'><span className='height'>25</span>Yrs</p>
                    <p className='weight'>Age</p>
                </div>
            </div>
            <div className="break-section">
                <h4 className="break-heading">
                    Add a break
                </h4>
                <div className="break">
                    <span onClick={(e) => showBreakTime(e)} className="break-time">10s</span><span onClick={(e) => showBreakTime(e)} className="break-time">20s</span><span onClick={(e) => showBreakTime(e)} className="break-time">30s</span><span onClick={(e) => showBreakTime(e)} className="break-time">40s</span><span onClick={(e) => showBreakTime(e)} className="break-time">50s</span>
                </div>
            </div>
            <div className="exercise-details">
                <h4 className="exercise-heading">
                    Exercise Details
                </h4>
                <div className="total-exercise-time">
                    <h5>Exercise Time</h5>
                    <p><span id='exercise-time'>0</span> Seconds</p>
                </div>
                <div className="total-break-time">
                <h5>Break</h5>
                    <p><span id='break-time-seconds'>{breakTimeNew}</span> Seconds</p>
                </div>
            </div>
            <button onClick={viewToast} className='activity-completed-btn'>Activity Completed</button>
            <ToastContainer />

        </div>
        
    );
};


export default ZymAuthor;