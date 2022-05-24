import { useState, useEffect } from 'react'
import { Navigation } from './components/navigation'
import { Header } from './components/header/header'
import { Features } from './components/features'
import { About } from './components/about'
import { Services } from './components/services'
import { Gallery } from './components/gallery'
import { Testimonials } from './components/testimonials'
import { Footer } from './components/footer'
import {Contact} from './components/contact'
import KnowMore    from './components/knowmore.jsx'
import {Photographers} from './components/photographers'
import { Blogs } from './components/blogs'
// import {Popup} from './components/popup'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      {/* <Popup /> */}
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Photographers data={landingPageData.Photographers} />
      <Blogs data={landingPageData.Blogs} />
      <Gallery />
      <Testimonials data={landingPageData.Testimonials} />
      <Contact />
      <Footer />
      <Router>
      <Switch>
        <Route exact path={'/knowmore'} component={KnowMore}>
        </Route>
      </Switch>
      </Router>
    </div>
  )
}

export default App