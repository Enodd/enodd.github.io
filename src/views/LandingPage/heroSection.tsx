import React from 'react';
import { motion } from 'framer-motion';

export const HeroSection: React.FC = () => {

	return <motion.section
			id={'heroSection'}
			className="py-10 px-0 flex flex-col justify-center items-center md:p-10"
			initial={{
				x: -20,
				opacity: 0
			}}
			animate={{
				x: 0,
				opacity: 1,
			}}
			transition={{
				duration: 0.5
			}}
		>
		<div className="wrapper flex flex-row justify-center">
			<div
				className="backdrop-blur-[1px] bg-[#1A2211aa] min-w-96 relative z-[2] min-h-[50vh] w-1/2 h-fit flex flex-col justify-center items-center py-12 px-4"
			>
				<div className="px-10 flex flex-col gap-5 justify-between items-center h-80 md:h-80">
					<div className="text-center">
						<h2 className="text-5xl mb-4">Damian Nowak</h2>
						<h3 className="text-4xl text-primary font-sans font-black">Front-end Developer</h3>
					</div>
					<h4 className="text-3xl text-center font-normal text-wrap">Where idea meets creation</h4>
					<button
						className="flex flex-row justify-center items-center min-h-14 border-none bg-transparent p-0 md:p-2 md:rounded-2xl"
					>
						<img src={"/images/TripleArrows.svg"} alt="go to main content" />
					</button>
				</div>
			</div>
		</div>
	</motion.section>
}
