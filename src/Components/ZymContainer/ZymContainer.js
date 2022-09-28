import React from 'react';
import Zym from '../Zym/Zym';
import './ZymContainer.css'

const ZymContainer = () => {
    return (
        <div className='zym-container'>
            <div className="zym-info">
                <Zym></Zym>
            </div>
            <div className="zym-calculation">
                
            </div>
        </div>
    );
};

export default ZymContainer;