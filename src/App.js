import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.jsx';
import Nav from './components/Nav/Nav.jsx';
import Content from './components/Content/Content.jsx';
import Error from './components/Error.jsx'
import Dialogs from './components/Dialogs/Dialogs.jsx'
import Messages from './components/Dialogs/Message.jsx'
import Users from './components/Dialogs/User.jsx'
import Name from './components/Dialogs/Name.jsx'
import logo1 from './components/Content/vasya-logo.png'
import image from './components/Content/image.png'
import {BrowserRouter, Route, Routes} from 'react-router-dom';

let userName = ["Иван Иванов", "Илон Макс", "Билл Гейтс"]
console.log(userName[0])

function App(props) {
  return (
    <div className = "grid-content">
      <BrowserRouter>
        <Header />
        <Nav />
        <Routes>
          {/* <Route path='/' exact element={<Content />} /> */}
          <Route path='/profile' exact element={<Content sentence = {props.sentence}/>} />
          <Route path='/messages' exact element={<Messages/>} />
          <Route path='/users' exact element={<Users/>} />
          <Route path='/dialogs' exact element={<Dialogs dialogsNames = {props.dialogsNames} dialogsMessage = {props.dialogsMessage}/>}/>
            <Route path='/dialogs/1' exact element={<Name element={userName[0]}/>} />
            <Route path='/dialogs/2' exact element={<Name element={userName[1]}/>} />
            <Route path='/dialogs/3' exact element={<Name element={userName[2]}/>} />
          <Route path='*' exact element={<Error/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
