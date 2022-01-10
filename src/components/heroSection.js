import React from 'react'
import "../styles/heroSection/hero.scss"

const HeroSection = () =>{
	return(
		<section className="heroSection">
			<h1 className="heroSection__title">Damian <span>"Enodd"</span> Nowak</h1>
			<h2 className="heroSection__subtitle">Front-End Developer</h2>
			<a href='#main'><i class="fas fa-angle-down" id="arrow"></i></a>
		</section>
	)
}

export default HeroSection