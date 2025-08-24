import react from 'react'
import Post from './Post.jsx'


function Posts(){
    return(
        <div className="post">
            <input type="text" placeholder='enter the post'/>
            <button>Add post</button>
            <Post sentence="I love elon mask, but maks is better"/>
            <Post sentence="i regret the option of buying a whole company"/>
            <Post sentence="Mars is next baby! ;)"/>
        </div>
    );
}

export default Posts;