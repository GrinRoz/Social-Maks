import react from "react";
import {NavLink} from 'react-router-dom';

export default function User(props){
    return (
        <div className="dialogs-name__item">
            {/* <h3>{props.name}</h3> */}
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}