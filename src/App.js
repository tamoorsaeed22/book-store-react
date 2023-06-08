import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Books from './components/books';
import Categories from './components/category';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
