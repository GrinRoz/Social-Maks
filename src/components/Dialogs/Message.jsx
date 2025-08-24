import react from "react";

export default function Message(props){
    return (
        <div className="dialogs-message__item">
            <p>{props.message}</p>
        </div>
    )
}