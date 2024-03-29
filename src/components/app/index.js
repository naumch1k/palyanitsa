import { Routes, Route } from 'react-router-dom';
import ScrollToTop from '../scroll-to-top';
import Home from '../../pages/home';
import Stories from '../../pages/stories';
import Story from '../../pages/story';
import Blog from '../../pages/blog';
import BlogEntry from '../../pages/blog-entry';
import Donate from '../../pages/donate';
import PageNotFound from '../../pages/404';

const App = () => (
  <ScrollToTop>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="stories" element={<Stories/>}/>
      <Route path="stories/:id" element={<Story/>}/>
      <Route path="blog" element={<Blog/>}/>
      <Route path="blog/:id" element={<BlogEntry/>}/>
      <Route path="donate" element={<Donate/>}/>
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
  </ScrollToTop>
);

export default App;
