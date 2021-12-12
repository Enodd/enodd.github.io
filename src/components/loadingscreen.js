import React, {useEffect} from 'react'
import anim from '../images/animation.svg'
import "../styles/loading/loading.scss"



const LoadingPage = () =>{

	const start = typeof window !== "undefined" ? Date.now() : ''

	function loadpage(){
		const loadScreen = document.querySelector(".loading")
		const spinner = loadScreen.querySelector('.loading__spinner')
		let loadTime = Date.now()-start
		spinner.style.animationDuration = loadTime+1000 < 2000 ? loadTime+1000 : 2000
		loadScreen.style.animationDuration = loadTime+100 < 600 ? loadTime+100 : 600
		loadScreen.style.animationDelay = loadTime+900 
		setTimeout(()=>{
			loadScreen.remove()
		}, (loadTime)+1000)
		
	}

	useEffect(()=>{
		window.addEventListener("load", loadpage())
		return () => window.removeEventListener("load", loadpage())
	},[])

	return(
		<div className="loading">
			<div className="loading__spinner">
				<img src={anim} alt="loading animation" />
				<p id="load">Loading...</p>
			</div>
		</div>
	)
}

export default LoadingPage