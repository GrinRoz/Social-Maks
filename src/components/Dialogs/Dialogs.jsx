import react from "react";
import User from './User.jsx'
import Message from './Message.jsx'

export default function Dialogs(){
    return(
            <div className="dialogs-content">
                <div className="dialogs-name">
                    <User name="Иван Иванов"/>
                    <User name="Илон Макс"/>
                    <User name="Билл Гейтс"/>
                </div>
                <div className="dialogs-message">
                    <Message message="Привет"/>
                    <Message message="Го на марс"/>
                    <Message message="Где мой чип?"/>
                </div>
                <div className="dialogs-send">
                    <input type="text" />
                    <button>Отправить</button>
                </div>
            </div>
    )
}