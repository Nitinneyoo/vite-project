
import { About } from './data/About';
import { Facility } from './data/facility';
import { FacultyMember } from './data/faculty';
import { Contact } from './data/contact';
import Academic from './data/academic';
import { Home } from './data/home';
import Navbar from '../src/components/Navbar';
import { Footer } from './data/footer';
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
