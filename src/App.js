
import './App.css';
import NavbarNew from "./Components/Navbar/NavbarNew";

import Form from "./Components/Contact Us/Form"
import Footer from "./Components/Footer/Footer"
import AboutUs from './Components/About Us/AboutUs';
import Services  from './Components/Services/WebDevelopment';


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import PortFolioRoute from './Components/PortFolio/PortFolioRoute';
import WebDevelopment from './Components/Services/WebDevelopment';
import FullStackDevelopment from './Components/Services/FullStackDevelopment';
import WebDesign from './Components/Services/WebDesign';
import NotFound from './Components/NotFound';


function App() {
  return (
   

    <BrowserRouter>

    <NavbarNew/>

   <Routes>

    <Route path='/'element={<HomePage/>}></Route>
    <Route path='/AboutUs'element={<AboutUs/>}></Route>
    <Route path='/Services'element={<Services/>}></Route>
    <Route path='/Portfolio'element={<PortFolioRoute/>}></Route>
    <Route path='/ContactUs'element={<Form/>}></Route>
    <Route path="/WebDevelopment" element={<WebDevelopment />} />
    <Route path="/FullStackDevelopment" element={<FullStackDevelopment/>} />
    <Route path="/WebDesign" element={<WebDesign/>} />
    <Route path='/*' element={<NotFound/>}></Route>
    </Routes> 

   <Footer/> 
    </BrowserRouter>
   
  );
}

export default App;
