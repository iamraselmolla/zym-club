import React, { useEffect } from 'react';
import './Question.css'

const Question = () => {
    return (
       <div className='question-answer-container text-white'>
         <div className='question-answer'>
            <h4>How Does React Work?</h4>
            <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering  code.</p>
        </div>
        <div className='question-answer'>
            <h4>Difference Between Props and State</h4>
            <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.

            Props is Immutable,	State is Mutable. <br />
Props can be used with state and functional components, State can be used only with the state components/class component Before 16.0. <br />
Props are read-only, State is both read and write.

            </p>
        </div>
        <div className='question-answer'>
            <h4>useEffect usecase without data loading</h4>
            <p>The useEffect Hook allows you to perform side effects in your components.

Some examples of side effects without data loading are: directly updating the DOM, timers etc.

useEffect accepts two arguments. The second argument is optional.</p>
        </div>
       </div>
    );
};

export default Question;