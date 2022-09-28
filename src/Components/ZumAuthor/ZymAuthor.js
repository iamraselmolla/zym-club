import React, { useState } from 'react';
import './ZymAuthor.css'


const ZymAuthor = () => {
 
    return (
        <div className='author-info'>
            <div className="author-details flex">
                <img src="author.jpg" className='author-img' alt="" />
                <div className="author-name-address">
                    <h4>Md Rasel Molla</h4>
                    <small>Bagerhat, Bangladesh</small>
                </div>
            </div>
            <div className="body-strcuture">
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
                    <span className="break-time">10s</span><span className="break-time">20s</span><span className="break-time">20s</span><span className="break-time">40s</span><span className="break-time">50s</span>
                </div>
            </div>
            <div className="exercise-details">
                <h4 className="exercise-heading">
                    Exercise Details
                </h4>
                <div className="total-exercise-time">
                    <h5>Exerciste Time</h5>
                    <p><span id='exercise-time'>100</span> Seconds</p>
                </div>
                <div className="total-break-time">
                <h5>Break</h5>
                    <p><span>15</span> Seconds</p>
                </div>
            </div>
            <button className='activity-completed-btn'>Activity Completed</button>
        </div>
        
    );
};

export default ZymAuthor;