import React from 'react';
import { motion } from 'framer-motion';

const quote: string =
		'Between creation and creativity there is a place where the two intertwine\nto create stunning designs into which life is breathed turning them into eye-catching websites.';

export const AboutSection: React.FC = () => {
    return <motion.section
        id={'aboutSection'} 
        initial={{
            x: 20,
            opacity: 0
        }}
        whileInView={{
            x: 0,
            opacity: 1
        }}
        transition={{
            duration: 0.5,
            delay: 0.5
        }}
        className="py-10 px-10 flex flex-col items-center gap-12 md:px-0"
        >
	<div className="wrapper flex flex-col items-center">
		<h2 className="font-bold uppercase mb-6 text-lg">About</h2>
		{
			quote.split('\n').map((char, i) => <motion.span
                initial={{
                    y: 10,
                    opacity: 0
                }}
                animate={{
                    y: 0,
                    opacity: 1
                }}
                transition={{
                    duration: 0.5,
                    delay: 0.3 * i + 0.5
                }}
				className={`text-3xl font-bold text-contrastLight opacity-1 text-center`}
			>
				{char}
			</motion.span>)
		}
	</div>
	<div className="w-full max-w-screen-xl flex flex-col items-center md:flex-row md:justify-between md:gap-4">
		<img src={'/images/programming_openSourceUndraw.svg'} alt="An Ilustration showing a blonde haired man programming" className="float"/>
		<div className="flex flex-col gap-4 w-full items-center md:items-start md:max-w-screen-sm m-4">
			<h3 className="text-5xl font-bold">
				Welcome
			</h3>
			<div className="flex flex-col gap-5">
				<p>
					My name is <span>Damian</span>, I'm Front-end Developer loving his job, building Websites and Web3 dapps.
				</p>
				<p>
					With <span>React</span> as my main framework I'm not closed for other tools. Whenever there's opportunity to learn new things, I'm in.
				</p>
				<p>Fun Fact: This website was made with <span>Sveltekit</span></p>
			</div>
		</div>
	</div>
</motion.section>
}