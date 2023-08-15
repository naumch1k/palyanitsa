import { Routes, Route } from 'react-router-dom';
import { AppLayout } from '../app-layout';
import Home from '../../pages/home';

const App = () => (
  <AppLayout>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
  </AppLayout>
);

export default App;
