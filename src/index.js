import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const sentence = [
    {sentence: "I love elon mask, but maks is better",
    id: "1",
    likes: "-1"
    },
    {sentence: "i regret the option of buying a whole company",
    id: "2",
    likes: "200"
    },    
    {sentence: "Mars is next baby! ;)",
    id: "3",
    likes: "9231"
    },
    {sentence: "Не хочу в школу",
    id: "4",
    likes: "9 mil"
    },
    {sentence: "Кто рано встаёт, тому бог подаёт",
    id: "4",
    likes: "102"
    }
]

let dialogsNames = [
    {name: "Иван Иванов", 
    id: "1"},
    {name: "Илон Макс", 
    id: "2"},
    {name: "Билл Гейтс", 
    id: "3",
    gender: "Мужчина"},
    {name: "Вася Пупкин",
    id: "4"},
    {name: "Артурджан Масакин",
    id: "5"}
]

let dialogsMessage = [
    {message: "Привет",
    id: "1"},
    {message: "Го на марс",
    id: "2"},
    {message: "Где мой чип?",
    id: "3"},
    {message: "Хочу макароны по флотски",
    id: "4"},
    {message: "Мои армянские друзья",
    id: "5"}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App sentence = {sentence} dialogsNames = {dialogsNames} dialogsMessage = {dialogsMessage}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();