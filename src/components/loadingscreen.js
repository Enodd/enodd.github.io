import React from 'react'
import anim from '../images/animation.svg'
import "../styles/loading/loading.scss"



const LoadingPage = () =>{
	return(
		<div className="loading">
			<div className="loading__spinner">
				{
					/* 
						TODO create animated loading screen
						? Animated SVG
					*/
				}
				<img src={anim} alt="loading animation" />
			</div>
		</div>
	)
}

export default LoadingPage