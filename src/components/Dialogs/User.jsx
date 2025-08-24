import react from "react";

export default function User(props){
    return (
        <div className="dialogs-name__item">
            <h3>{props.name}</h3>
        </div>
    )
}