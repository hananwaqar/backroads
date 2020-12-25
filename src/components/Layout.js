import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
// import 'bootstrap/dist/css/bootstrap.min.css'
import './llayout.css'
// import '../sass/layout.scss'
export default function Layout({children}) {
    return (
        <main>
        <Navbar />
        {children}
         <Footer />
        </main>
    )
}
