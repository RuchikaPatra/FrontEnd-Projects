import './App.css';
import AppLayout from './component/AppLayout';
import Body from './component/Body';
import Header from './component/Header';


function App() {
  return (
    <div className="App">
      <AppLayout/>
      <Header/>
      <Body/>
      <AppLayout/>
    </div>
  );
}

export default App;
