import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.scss';
import Home from './components/Home/Home';
import ImageDetail from './components/Image-detail/ImageDetail';


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='detail/:Imgid' element={<ImageDetail />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
