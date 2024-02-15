import './App.css'
import Navbar from './components/Navbar';
import SectionOne from './components/sections/SectionOne';
import SectionTwo from './components/sections/SectionTwo';
import SectionThree from './components/sections/SectionThree';
import SectionFour from './components/sections/SectionFour';
import Form from './components/Form';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {

  return (
    <>
      <div>
        <Navbar/>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>
        <Form/>
        <Footer/>
        <ScrollToTopButton />
      </div>
    </>
  )
}

export default App
