import './App.css';
import axios from 'axios'
import Header from './components/Header/Header';

function App() {

  const handleClick = () => console.log(process.env.TEST)
   const handleDelete = async (movieID) => {
    let result = axios.post('/movie', movieID)
  }
  return (
    <div className="App">
      <Header/>
      <button onClick={handleClick}></button>

    </div>
  );
}

export default App;
