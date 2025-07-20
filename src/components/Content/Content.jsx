import react from 'react';
import './Content.css'
import image from './image.png'

function Content(){
    return(
        <div className="content">
            <div className="profile">
                <img src={image} alt="" className='ava'/>
                <p>Elon Maks</p>
            </div>
            <div className="post">
                <input type="text" placeholder='enter the post'/>
                <button>Add post</button>
                <div className="post-item">
                    <img src={image} alt="" className='ava-mini'/>
                    <span>Elon Maks</span>
                    <p>Some text</p>
                </div>
            </div>
        </div>
   );
}

export default Content;