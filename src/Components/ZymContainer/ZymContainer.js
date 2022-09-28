import React from 'react';
import ZymAuthor from '../ZumAuthor/ZymAuthor';
import Zym from '../Zym/Zym';
import './ZymContainer.css'

const ZymContainer = () => {
    return (
        <div className='zym-container'>
            <div className="zym-info">
               <div className="zym-info-container">
               <Zym></Zym>
               </div>
            </div>
            <div className="zym-calculation">
                <ZymAuthor></ZymAuthor>
            </div>
        </div>
    );
};

export default ZymContainer;