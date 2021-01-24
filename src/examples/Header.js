import React from 'react'
import {useStaticQuery,graphql} from 'gatsby'

// const getSiteData = graphql`
//     {
//           site{
//               siteMetadata{
//                   title
//                   description
//                   author
//                   data{
//                       age
//                   }
//               }
//           }
//       }



// `

export default function Header() {
    const data = useStaticQuery(graphql`
      {
          site{
              siteMetadata{
                  title
                  description
                  author
                  data{
                      age
                  }
              }
          }
      }
    
      `)
    console.log(data)
    return (
        <div>
             <h1>title:{data.site.siteMetadata.title}</h1>
             <h1>author:</h1>
        </div>
    )
}
