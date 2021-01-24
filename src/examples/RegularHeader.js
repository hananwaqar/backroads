import React from 'react'
import {StaticQuery,graphql} from 'gatsby'
const getSiteData = graphql`
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



`
export default function RegularHeader() {
    return (
        <StaticQuery query={getSiteData} render={(data)=>{
            console.log(data);
            return (
             <div>
                 <h1>{data.site.siteMetadata.title}</h1>
                 <h1>{data.site.siteMetadata.author}</h1>
             </div>

            )
        }} />
    )
}
