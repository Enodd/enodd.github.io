import { useMediaQuery } from '@hooks/useMediaQuery';
import { theme } from '@theme/index';
import gsap from 'gsap';
import React, { useRef, useState } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';

const openState = {
    opacity: 1,
    scaleY: 1
}

export const HeaderMobile: React.FC<{
    onAnchorClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
}> = ({ onAnchorClick }) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const isMdDown = useMediaQuery(theme.breakpoints.down('md'));
    const menuRef = useRef<HTMLDivElement>(null);
    const container = useRef<HTMLElement>(null);

    const handleToggle = () => {
        const timeline = gsap
            .timeline({
                paused: true,
                reversed: !isVisible,
                onReverseComplete() {
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

    const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        handleToggle();
        onAnchorClick(e);
    }

    return <nav ref={container}>
        <div ref={menuRef} className="absolute top-0 left-0 h-screen w-screen bg-background-site flex flex-col items-center gap-3 py-5 px-10 z-10 origin-top" style={{ display: 'none' }}>
            <button className="self-end" onClick={handleToggle}>
                <FaTimes size={isMdDown ? '1.5rem' : '2rem'} className={'fill-contrastLight'} />
            </button>
            <ul className="flex flex-col items-center gap-3 list-none">
                <li>
                    <a href='#aboutSection' onClick={handleAnchorClick}>
                        About
                    </a>
                </li>
                <li>
                    <a href='#workSection' onClick={handleAnchorClick}>
                        Work
                    </a>
                </li>
                <li>
                    <a href='#contact' onClick={handleAnchorClick}>
                        Contact
                    </a>
                </li>
	        </ul>
        </div>
        <button className={'cursor-pointer'} onClick={handleToggle}>
            <FaBars size={isMdDown ? '1.5rem' : '2rem'} className={'fill-contrastLight'} />
        </button>
	</nav>
}