import './App.css';

import LeftSideBar from './components/LeftSideBar/LeftSideBar';
import TodoPage from './pages/TodoPage';


function App() {
  return (
    <div className='App'>
      <LeftSideBar />
      <TodoPage />
    </div>
  );
}

export default App;
