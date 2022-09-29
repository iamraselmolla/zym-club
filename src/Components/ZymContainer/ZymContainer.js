import React from 'react';
import Header from '../Header/Header';
import ZymAuthor from '../ZumAuthor/ZymAuthor';
import Zym from '../Zym/Zym';
import './ZymContainer.css'

const ZymContainer = () => {
    return (
        <div className='zym-container'>
            <div className="zym-info">
               <div className="zym-info-container">
                <Header></Header>
                <h2 className='text-white'> Select today’s exercise</h2>
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