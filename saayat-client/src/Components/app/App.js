import './App.css';
import { BrowserRouter } from 'react-router-dom';
import MainComponent from '../main component/mainComponent.js';


function App() {
  return (
    <BrowserRouter>
      <MainComponent></MainComponent>
    </BrowserRouter>
  );
}

export default App;
