import gsap from 'gsap';
import React, { useRef, useState } from 'react';

const openState = {
    opacity: 1,
    scaleY: 1
}

export const HeaderMobile: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const container = useRef<HTMLElement>(null);

    const handleToggle = () => {
        const timeline = gsap
            .timeline({
                paused: true,
                reversed: !isVisible,
                onReverseComplete() {
                    console.log('completed')
                    gsap.set(menuRef.current, {display: 'none'})
                }
            })
            .set(menuRef.current, {display: 'flex'})
            .fromTo(menuRef.current, {
                opacity: 0,
                scaleY: 0
            }, openState)
            .duration(0.3)
        // REMEMBER TO PUT 0 INSIDE .reverse()
        timeline.reversed() ? timeline.play() : timeline.reverse(0);
        setIsVisible(prev => !prev)
    }

    return <nav ref={container}>
        <div ref={menuRef} className="absolute top-0 left-0 h-screen w-screen bg-background-site flex flex-col items-center gap-3 py-4 px-8 z-10 origin-top" style={{ display: 'none' }}>
            <button className="self-end" onClick={handleToggle}>
                close
            </button>
            <ul className="flex flex-col items-center gap-3 list-none">
                <li>About</li>
                <li>Work</li>
                <li>Contact</li>
	        </ul>
        </div>
        <button onClick={handleToggle}>MoBILE</button>
	</nav>
}