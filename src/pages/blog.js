// import React from 'react'
// import {Link} from 'gatsby'
// import Layout  from '../components/Layout'
// import {graphql} from 'gatsby'
// import Images from '../examples/Images'

// export default function blog({data}) {
//     return (
      
//         <Layout>
//         hello from blog page !!!!
//         {/* <Images /> */}
//         <Link to = "/">
//         back home
//         </Link>
//         {/* <h1>title: { data.site.siteMetadata.title }</h1> */}
//     </Layout>

//     )
// }


// // export const query = graphql`

// //     {
// //           site{
// //               siteMetadata{
// //                   title
// //                   description
// //                   author
// //                   data{
// //                       age
// //                   }
// //               }
// //           }
// //       }


// // `

import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import StyledHero from '../components/StyleHero'
import {graphql} from 'gatsby'

const blog = ({data}) => {
    return (
        <Layout>
            <StyledHero img={data.blogBcg.childImageSharp.fluid} />
        </Layout>
    )
}

export const query = graphql`
query {
    blogBcg:file(relativePath:{eq:"defaultBcg.jpg"}){
      childImageSharp{
        fluid(quality: 90, maxWidth:4160){
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default blog