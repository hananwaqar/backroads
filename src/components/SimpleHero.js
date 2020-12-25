import React from 'react'


import './llayout.css'
// import '../sass/layout.scss'
export default function SimpleHero({children}) {
    return (
        <header className={"defaultHero"}>
        {children}
    </header>
    )
}
