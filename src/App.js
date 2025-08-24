import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.jsx';
import Nav from './components/Nav/Nav.jsx';
import Content from './components/Content/Content.jsx';
import Error from './components/Error.jsx'
import Dialogs from './components/Dialogs/Dialogs.jsx'
// import Messages from './components/'
// import logo1 from './components/Content/vasya-logo.png'
import image from './components/Content/image.png'
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className = "grid-content">
      <BrowserRouter>
        <Header />
        <Nav />
        <Routes>
          <Route path='/profile' exact element={<Content name="Elon Maks" image={image}/>} />
          {/* <Route path='/messages' exact element={<Messages/>} />
          <Route path='/users' exact element={<Users/>} /> */}
          <Route path='/dialogs' exact element={<Dialogs/>} />
          <Route path='*' exact element={<Error/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
