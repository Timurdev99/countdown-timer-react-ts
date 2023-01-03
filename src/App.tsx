import './App.css';
import CountDownTimer from './CountDownTimer';

function App() {

  return (
    <div className="App">
        <div>
        <CountDownTimer hours={1} minutes={20} seconds={40}/>
        </div>
    </div>
  );
}

export default App;
