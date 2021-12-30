import React from 'react'
import "../styles/heroSection/hero.scss"

const HeroSection = () =>{
	return(
		<section className="heroSection">
			<h1 className="heroSection__title"><span>Hello</span>There</h1>
			<a href="#main"><i class="fas fa-angle-down" id="arrow"></i></a>
		</section>
	)
}

export default HeroSection