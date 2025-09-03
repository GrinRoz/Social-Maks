import react from 'react';
import './Content.css'
import Dialogs from '../Dialogs/Dialogs.jsx'
import Posts from './Posts.jsx'
import image from './image.png'
import ProfileInfo from './ProfileInfo.jsx';

function Content(props){
    return(
        <div className="content">
            <div className="profile">
                <ProfileInfo  />
            </div>
            <Posts sentence = {props.sentence}/>
        </div>
   );
}

export default Content;