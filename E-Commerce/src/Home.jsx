import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import About from './components/About'
import Home1 from './components/Home1'
import Testimonal from './components/Testimonal'
import Contact from './components/Contact'
import NewCollection from './components/Collection/New-Collection'
import ExploreCollection from './components/Collection/Explore-Collection'

function Home() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="/about" element={<About />} />
          <Route path ="/testimonal" element={<Testimonal/>}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/New-collection" element={<NewCollection />} />
          <Route path="/Explore" element={<ExploreCollection/> } />
        </Routes>
      </Router>
    </>
  )
}

export default Home
