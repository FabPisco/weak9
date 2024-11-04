import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome';
import Greetings from './components/Greetings';
import Sayhello from './components/SayHello';

function App() {
  return (<div className='App'>
    <img src={logo} alt='App Logo'/>
<h1>Hello</h1>

<h1>Test</h1>
<Welcome></Welcome>
<Greetings name="GBC"/>
<Sayhello fname="Fab" lname="Pisco"/>
<Sayhello fname="Fabio"  lname="kobo"/>
<Sayhello fname="Test Name" lname="ro"/>
    </div>)
}

export default App;
