import react from 'react'
import Post from './Post.jsx'

const sentence = [
    {sentence: "I love elon mask, but maks is better",
    id: "1",
    likes: "-1"
    },
    {sentence: "i regret the option of buying a whole company",
    id: "2",
    likes: "200"
    },    
    {sentence: "Mars is next baby! ;)",
    id: "3",
    likes: "9231"
    },
    {sentence: "Не хочу в школу",
    id: "4",
    likes: "9 mil"
    },
    {sentence: "Кто рано встаёт, тому бог подаёт",
    id: "4",
    likes: "102"
    }
]

function Posts(){
    return(
        <div className="post">
            <input type="text" placeholder='enter the post'/>
            <button>Add post</button>
            {/* <Post sentence="I love elon mask, but maks is better"/>
            <Post sentence="i regret the option of buying a whole company"/>
            <Post sentence="Mars is next baby! ;)"/> */}
            {sentence.map((e) => <Post sentence = {e.sentence} id = {e.id} likes = {e.likes} />)}   
        </div>
    );
}

export default Posts;