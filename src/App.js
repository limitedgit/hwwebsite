import logo, { ReactComponent } from './logo.svg';
import './App.css';
import * as tf from '@tensorflow/tfjs';


// asynchronous function for loading in model
async function loadModel() {
  const model = await tf.loadLayersModel('models/model.json')
  return model;
}

const model = loadModel();
//use model to predict stuff
//TODO


function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Please upload a picture. 
   
        </p>
        <input type="file" />
        
        <a
          className="github link"
          href="https://github.com/limitedgit/hwwebsite"
          target="_blank"
          rel="noopener noreferrer"
        >
          github page
        </a>
      </header>
    </div>
  );
}

export default App;