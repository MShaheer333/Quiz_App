import React, { useState } from 'react'
import QuestionList from './QuestionList'
import QuizCss from './Quiz.css'

export default function Quiz() {
    const questions = [
        {
        question: "Q1) What is React?",
        options: [' CSS Framework', 'React Library','React Framework','Testing tool'],
        answer: 'React Library'
    },
    {
        question: "Q2) What is JSX?",
        options: ['A syntax extension for JavaScript', 'A CSS framework', 'A database query language', 'A testing library'],
        answer: 'A syntax extension for JavaScript'
    },
    {
        question: "Q3) What is the purpose of React's `useState` hook?",
        options: ['To manage global state', 'To manage component state', 'To create side effects', 'To manage routing'],
        answer: 'To manage component state'
    },
    {
        question: "Q4) What is a component in React?",
        options: ['A UI element that can be reused', 'A library for building forms', 'A React hook', 'A testing tool'],
        answer: 'A UI element that can be reused'
    },
    {
        question: "Q5) How do you pass data from a parent component to a child component?",
        options: ['Using state', 'Using props', 'Using context', 'Using events'],
        answer: 'Using props'
    },
    {
        question: "Q6) Which hook is used for lifecycle methods in functional components?",
        options: ['useState', 'useEffect', 'useContext', 'useReducer'],
        answer: 'useEffect'
    },
    {
        question: "Q7) What is the virtual DOM in React?",
        options: ['A copy of the real DOM that syncs with it', 'A way to optimize CSS rendering', 'A testing library', 'A real DOM manipulator'],
        answer: 'A copy of the real DOM that syncs with it'
    },
    {
        question: "Q8) How can you handle events in React?",
        options: ['Directly modifying the DOM', 'Using inline event handlers', 'Using event listeners', 'Using synthetic events'],
        answer: 'Using synthetic events'
    },
    {
        question: "Q9) What is the purpose of `key` in React lists?",
        options: ['To uniquely identify list items', 'To apply CSS styles', 'To manage state', 'To navigate between pages'],
        answer: 'To uniquely identify list items'
    },
    {
        question: "Q10) What does `setState` do in class components?",
        options: ['Directly changes state', 'Replaces component methods', 'Schedules a re-render and updates the state', 'Applies event listeners'],
        answer: 'Schedules a re-render and updates the state'
    }
 ]
 const [currentQuestionIndex, setCurrentQuestionIndex ] = useState(0);
 const [currentAnswer, setCurrentAnswer ] = useState(null);
 const [score,setScore]= useState(0);
 const handleClick= (option)=>{
    setCurrentAnswer(option)
    if(option=== questions[currentQuestionIndex].answer){
        setScore(score+1)
    }
 }
 const handleNextQuestion= ()=>{
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setCurrentAnswer(null);
 }
  return (
    <div>
        {
            currentQuestionIndex< questions.length ?    <div>
            <QuestionList  question={questions[currentQuestionIndex].question}
            options={questions[currentQuestionIndex].options} handleClick={handleClick} currentAnswer={currentAnswer}/>
            <button disabled={currentAnswer === null} className={currentAnswer === null ? 'button-disable' : 'button'} onClick={handleNextQuestion}>Next Question</button>
            </div> : <div className='points'>Your score is {score}</div>
        }

    </div>
  )
}
