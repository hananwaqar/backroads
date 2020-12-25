import React from "react"
import {Link} from 'gatsby'
import Layout from '../components/Layout'
import SimpleHero from '../components/SimpleHero.js'
import Banner from '../components/Banner.js'
import About from '../components/Home/About'
import Services from '../components/Home/Services'
export default () => (
  
   <Layout>

  <SimpleHero >
     <Banner title = "continue exploring" info = "Hye babe" >
  
     <Link to="/tours" className="btn-white">
        explore tours
     </Link>
        
     </Banner>
  </SimpleHero>
   <About />
   <Services />
   </Layout>
  
  
    
)
