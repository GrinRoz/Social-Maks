import react from 'react';
import './Content.css'
import Dialogs from '../Dialogs/Dialogs.jsx'
import Posts from './Posts.jsx'
import image from './image.png'

function Content(props){
    return(
        <div className="content">
            <div className="profile">
                <img src={props.image} alt="" className='ava'/>
                <p>{props.name}</p>
            </div>
            <Posts />
        </div>
   );
}

export default Content;