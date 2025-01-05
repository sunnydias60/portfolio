import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import RecentWork from './components/recent_work/RecentWork'
// import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Skills from './components/skills/Skills'
import { Achievement } from './components/achievement/Achievement'


const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Skills />
      <Achievement />
      <RecentWork />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  )
}

export default App