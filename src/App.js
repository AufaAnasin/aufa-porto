import Layout from './components/Layout';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About'
import Contact from './components/Contact';

//router nya react itu di sini 

function App() {
  return (
   <>
   <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
    </Route>
   </Routes>
   </>
  );
}

export default App;
