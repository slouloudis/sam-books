import './App.css';
import axios from 'axios'

function App() {

   const handleDelete = async (bookID) => {
    let result = axios.post('/book', bookID)
  }
  return (
    <div className="App">
    </div>
  );
}

export default App;
