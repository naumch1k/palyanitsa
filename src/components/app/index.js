import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/home';
import PageNotFound from '../../pages/404';

const App = () => (
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="*" element={<PageNotFound/>}/>
  </Routes>
);

export default App;
