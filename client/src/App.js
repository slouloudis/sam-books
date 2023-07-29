import './App.css';
import axios from 'axios'
import Header from './components/Header/Header';
import Main from './components/Main';

function App() {

  const handleClick = () => console.log(process.env.TEST)
   const handleDelete = async (movieID) => {
    let result = axios.post('/movie', movieID)
  }
  return (
    <div className="App bg">
      <Header/>
      <Main />
    </div>
  );
}

export default App;
