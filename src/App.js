import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Books from './routes/Books';
import Categories from './routes/Categories';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Route>
    </Routes>
  );
}

export default App;
