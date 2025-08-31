import react from 'react'
import image from './image.png'

function Post(props){
    return(
        <div className="post-item">
            <img src={image} alt="" className='ava-mini'/>
            <span>Elon Maks</span>
            <p>{props.sentence}</p>
            <span>{props.likes} Likes</span>
        </div>
    );
}

export default Post;