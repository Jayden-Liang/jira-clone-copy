
import './App.css';
import { Routes, Route, Navigate   } from "react-router-dom";
import Project from './pages/Project/Project';
import ErrorPage from './pages/ErrorPage/ErrorPage';

function App() {
  return (
    <Routes>
      <Route path='/project' element={<Project />} />
      <Route path='/' element={<Navigate to='/project' />} />      
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
