import './App.css';
import { MyComponent, defineCustomElements } from 'react-library';

defineCustomElements();

function App() {
  return (
    <div className="App">
      <MyComponent first="Vaibhav" last="Paroha" />
    </div>
  );
}

export default App;