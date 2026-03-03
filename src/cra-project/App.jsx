import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PublicLayout from './components/Layouts/PublicLayout';

import Home from './pages/Home'
import GalleryPage from './pages/Home/Gallery';
import About from './pages/About';
import SquadDetail from './pages/About/Structure/SquadDetail';
import Merchant from './pages/Merchant';


function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Landing Page */}
        <Route element={<PublicLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/home/gallery' element={<GalleryPage />} />
          <Route path='/about' element={<About />} />
          <Route path="/about/squad/:divisionId" element={<SquadDetail />} />
          <Route path='/merchant' element={<Merchant />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App