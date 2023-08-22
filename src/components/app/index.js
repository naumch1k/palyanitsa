import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/home';
import News from '../../pages/news';
import PageNotFound from '../../pages/404';

const App = () => (
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/news" element={<News/>}/>
    <Route path="*" element={<PageNotFound/>}/>
  </Routes>
);

export default App;
