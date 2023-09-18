import './App.css';
import { Header } from './componets/Header';
import { TodoList } from './componets/TodoList';
import { News } from './componets/News';
import  {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className='App'>
      <Header/>
      <Routes>
      <Route path='/' element={<TodoList/>}/>
      <Route path='/news' element={<News/>}/>
      </Routes>
    </div>
  );
}

export default App;
