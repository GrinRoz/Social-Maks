import react from "react";
import User from './User.jsx'
import Message from './Message.jsx'
let dialogsNames = [
    {name: "Иван Иванов", 
    id: "1"},
    {name: "Илон Макс", 
    id: "2"},
    {name: "Билл Гейтс", 
    id: "3",
    gender: "Мужчина"}
]

let dialogsMessage = [
    {message: "Привет",
    id: "1"},
    {message: "Го на марс",
    id: "2"},
    {message: "Где мой чип?",
    id: "3"},
]

export default function Dialogs(){
    return(
            <div className="dialogs-content">
                <div className="dialogs-name">
                    <User name={dialogsNames[0].name} id={dialogsNames[0].id}/>
                    <User name={dialogsNames[1].name} id={dialogsNames[1].id}/>
                    <User name={dialogsNames[2].name} id={dialogsNames[2].id}/>
                </div>
                <div className="dialogs-message">
                    <Message message={dialogsMessage[0].message} id={dialogsMessage[0].id}/>
                    <Message message={dialogsMessage[1].message} id={dialogsMessage[1].id}/>
                    <Message message={dialogsMessage[2].message} id={dialogsMessage[2].id}/>
                </div>
                <div className="dialogs-send">
                    <input type="text" />
                    <button>Отправить</button>
                </div>
            </div>
    )
}