import {NavLink} from 'react-router-dom';

const Error=() =>{
    return (
        <div className="content">
            <h1 className='error-title'>Произошла проблема</h1>
            <h3 className='error-subtitle'>Мы исправим эту ошибку как можно быстрее!</h3>
            <NavLink to="/profile">Назад</NavLink>
        </div>
    )
}

export default Error;