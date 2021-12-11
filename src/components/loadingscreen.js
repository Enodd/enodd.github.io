import React, {useEffect} from 'react'
import anim from '../images/animation.svg'
import "../styles/loading/loading.scss"



const LoadingPage = () =>{

	function loadpage(){
		const loadScreen = document.querySelector(".loading")
		setTimeout(()=>{
			loadScreen.remove()
			document.body.style.overflowY = "scroll"
		}, 5000)
		
	}

	useEffect(()=>{
		window.addEventListener("load", loadpage())
		return () => window.removeEventListener("load", loadpage())
	},[])

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