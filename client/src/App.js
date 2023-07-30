import './App.css';
import axios from 'axios'
import Header from './components/Header/Header';
import Main from './components/Main';


function App() {

  return (
    <div className="App bg">
      <Header/>
      <Main />
      {/* <!-- svg: first layer --> */}
    </div>
  );
}

export default App;
