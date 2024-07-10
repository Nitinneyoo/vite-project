
import { About } from './data/About';
import { Academic } from './data/academic';
import { Facility } from './data/facility';
import { Footer } from './data/footer';
import { Home } from './data/home';
import { Contact } from './data/contact';
import { FacultyMember } from './data/faculty';
import Navbar from './components/Navbar';
function App() {

  return (
    <>
      <div className='relative flex justify-center items-center w-full'>
        <Navbar />
      </div>
      <Home />
      <About />
      <Academic />
      <Facility />
      <FacultyMember />
      <Contact />
      <Footer />
    </>
  )
}

export default App
