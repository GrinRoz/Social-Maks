import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.jsx';
import Nav from './components/Nav/Nav.jsx';
import Content from './components/Content/Content.jsx';

function App() {
  return (
    <div className = "grid-content">
      <Header />
      <Nav />
      <Content />
    </div>
  );
}

export default App;
