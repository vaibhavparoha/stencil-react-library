import './App.css';
import { MyComponent, defineCustomElements, OneTouchButton } from 'react-library';

defineCustomElements();

function App() {
  return (
    <div className="App">
      {/* <MyComponent first="Vaibhav" last="Paroha" />
      <MyComponent first="Vaibhav" last="Paroha" /> */}
      <OneTouchButton label={'Submit'} onBtnClick={(e) => {
        debugger
      }} />
      <OneTouchButton label={'Add New'} onBtnClick={(e) => {
        debugger
      }} />
      <OneTouchButton label={'Get Some Data'} onBtnClick={(e) => {
        debugger
      }} />
    </div>
  );
}

export default App;