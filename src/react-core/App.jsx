import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PublicLayout from '../react-layouts/PublicLayout';

import Home from '../react-pages/Home'
import GalleryPage from '../react-pages/Home/Gallery';
import About from '../react-pages/About';
import SquadDetail from '../react-pages/About/Structure/SquadDetail';
import Merchant from '../react-pages/Merchant';
import LearningPath from '../react-pages/Showcase/';
import DivisionProjectList from '../react-pages/Showcase/DivisionProjectList';
import ProjectDetail from '../react-pages/Showcase/ProjectDetail';


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
          <Route path='/showcase' element={<LearningPath />} />
          <Route path="/showcase/projects/:division" element={<DivisionProjectList />} />
          <Route path="/showcase/projects/:division/:id" element={<ProjectDetail />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App