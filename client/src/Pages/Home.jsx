import React from 'react'
import Hero from '../Components/Hero'
import About from '../Components/About'
import TrustedBrand from '../Components/TrustedBrand'
import Testimonials from '../Components/Testimonials'
import ConsultingLandingPage from '../Components/ConsultingLandingPage'

const Home = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <TrustedBrand/>
        <Testimonials/>
        <ConsultingLandingPage/>
    </div>
  )
}

export default Home