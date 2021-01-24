import React from "react"
// import {Link} from 'gatsby'
import Layout from '../components/Layout'
import SimpleHero from '../components/SimpleHero.js'
import Banner from '../components/Banner.js'
import About from '../components/Home/About'
import Services from '../components/Home/Services'
import StyledHero from '../components/StyleHero'
import {graphql} from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
export default ({data}) => (
  
   <Layout>

  {/* <SimpleHero > */}
  <StyledHero home = "true" img={data.defaultBcg.childImageSharp.fluid}>

  <Banner title = "continue exploring" info = "Hye babe" >
  
  <AniLink fade to="/tours" className="btn-white">
     explore tours
  </AniLink>
     
  </Banner>
  </StyledHero>
     
  {/* </SimpleHero> */}
   <About />
   <Services />
   </Layout>
  
  
    
)

export const query = graphql`
query {
   defaultBcg:file(relativePath:{eq:"defaultBcg.jpg"}){
      childImageSharp{
         fluid(quality:90,maxWidth:4160){
            ...GatsbyImageSharpFluid_withWebp
         }
      }
   }
}

`