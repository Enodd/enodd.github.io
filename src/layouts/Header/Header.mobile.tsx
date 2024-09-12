import gsap from 'gsap';
import React, { useCallback, useEffect, useRef, useState } from 'react';

const openState = {
    opacity: 1,
    scaleY: 1
}

export const HeaderMobile: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const handleToggle = () => {
        const timeline = gsap.timeline({
            paused: true,
            reversed: !isVisible,
            onReverseComplete: () => {
                console.log('reversed')
                gsap.set(menuRef.current, { display: 'none' });
            }
        })
        .set(menuRef.current, { display: 'flex' })
        .fromTo(menuRef.current, { opacity: 0, scaleY: 0 }, openState)
        .duration(0.3);

        console.log(isVisible, timeline.reversed());
        if (timeline.reversed()) {
            console.log('open');
            timeline.play();
        } else {
            console.log('close');
            timeline.reverse();
        }
        setIsVisible(prev => !prev);
    };

    return <nav>
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