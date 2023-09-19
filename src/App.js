import './App.css';
import { Header } from './componets/Header';
import { TodoList } from './componets/TodoList';
import { News } from './componets/News';
import  {Routes, Route} from 'react-router-dom'
import { Details } from './componets/Details';
function App() {
  return (
    <div className='App'>
      <Header/>
      <Routes>
      <Route path='/' element={<TodoList/>}/>
      <Route path='/news' element={<News/>}/>
      <Route path='/details' element={<Details/>}/>
      </Routes>
    </div>
  );
}

export default App;
