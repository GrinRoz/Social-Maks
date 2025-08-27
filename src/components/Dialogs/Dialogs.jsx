import react from "react";
import User from './User.jsx'
import Message from './Message.jsx'
let dialogsNames = {
    name: "Иван Иванов", 
    id: "1"
}

export default function Dialogs(){
    return(
            <div className="dialogs-content">
                <div className="dialogs-name">
                    <User name={"Иван Иванов"} id={"1"}/>
                    <User name={"Илон Макс"} id={"2"}/>
                    <User name={"Билл Гейтс"} id={"3"}/>
                </div>
                <div className="dialogs-message">
                    <Message message={"Привет"}/>
                    <Message message={"Го на марс"}/>
                    <Message message={"Где мой чип?"}/>
                </div>
                <div className="dialogs-send">
                    <input type="text" />
                    <button>Отправить</button>
                </div>
            </div>
    )
}