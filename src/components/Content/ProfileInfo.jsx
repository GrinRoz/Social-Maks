import react from "react"
import image from './image.png'

export default function ProfileInfo(props){
    return (
        <div className="content">
            <img src={image} alt="" className='ava'/>
            <p>Илон Макс</p>
        </div>
    )
}