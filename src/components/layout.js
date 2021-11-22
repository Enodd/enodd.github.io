import React from 'react'
import Header from "../components/header"
import Footer from "../components/footer"

const Layout = ( { children, mainProp } ) =>{
    
    const mainName = mainProp ? mainProp : "core-main"

    return(
        <div className="container">
            <Header />
            <main className={mainName}>
                {children}    
            </main>
            <Footer />
        </div>
    )
}

export default Layout