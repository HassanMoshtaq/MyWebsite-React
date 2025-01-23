
// Importing The necessary files
// Importing the necessary files and React Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FavouriteMovie from './Favourite-Movies';
import Movies from './Movies';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FavouriteMovie />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </Router>
  );
}

export default App;
