import React from 'react'
import Header from "../components/header"
import Footer from "../components/footer"
import LoadingPage from './loadingscreen'

const Layout = ( { children, contentId } ) =>{
    

    return(
        <div className="container">
            <a href={`#${contentId}`} className="secretbutton">
                Go to page's content
            </a>
            <LoadingPage />
            <Header />
                {children}
            <Footer />
        </div>
    )
}

export default Layout