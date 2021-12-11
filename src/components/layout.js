import React from 'react'
import Header from "../components/header"
import Footer from "../components/footer"
import LoadingPage from './loadingscreen'

const Layout = ( { children } ) =>{
    

    return(
        <div className="container">
            <LoadingPage />
            <Header />
                {children}
            <Footer />
        </div>
    )
}

export default Layout