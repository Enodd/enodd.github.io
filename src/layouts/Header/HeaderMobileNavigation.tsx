import React, { useEffect, useRef, useState } from 'react';
import { FaBars, FaGithub, FaLinkedin, FaTimes, FaTwitter } from 'react-icons/fa'; 

export const HeaderMobileNavigation: React.FC<{anchors: string[],onAnchorClick: (e) => void}> = ({anchors, onAnchorClick}) => {
    const menuRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const windowPath = typeof window !== undefined ? window.location.pathname : undefined;
    
    const HandleMenuToggle = async (menuState: 'open' | 'close') => {
        if (menuState === 'open') {
            await setIsMenuOpen(true);
            menuRef.current.className='navigation__mobileListWrapper closeSlideDown';
        } else {
            menuRef.current.className='navigation__mobileListWrapper closeSlideUp';
            setTimeout(() => {
                setIsMenuOpen(false);
            }, 300);
        }
    }

    const HandleAnchorClick = (e: any) => {
        onAnchorClick(e);
        HandleMenuToggle('close');
    }

    return <nav className="core-header__navigation navigation">
    {
        isMenuOpen
        ? <div ref={menuRef} className="navigation__mobileListWrapper">
            <div style={{display: 'flex', justifyContent: 'flex-end', width: '100%'}}>
                <button className='navigation__toggleButton button' onClick={() => HandleMenuToggle('close')}>
                    <FaTimes size='32px' fill={'inherit'} />
                </button> 
            </div>
            <ul className="navigation__list list list--vertical">
                {
                    windowPath !== '/'
                    ? <li className="list__element">
                        <a href={'/'}>
                            Home
                        </a>
                    </li>
                    : <></>
                }
                {
                    anchors.map(anchor => <li className="list__element">
                        <a href={`#${anchor}`} onClick={(e) => HandleAnchorClick(e)}>
                            {anchor}
                        </a>
                    </li>)
                }
            </ul>
            <div className='navigation__mobileSocials'>
                <ul className="navigation__list list list--horizontal">
                    <li className="list__element">
                        <a target='_blank' href="https://twitter.com/enodd_dev" className='navigation__icon'>
                            <FaTwitter size={'48px'} fill={'inherit'}/>
                        </a>
                    </li>
                    <li className="list__element">
                        <a target='_blank' href="#" className='navigation__icon'>
                            <FaLinkedin size={'48px'} fill={'inherit'}/>
                        </a>
                    </li>
                    <li className="list__element">
                        <a target='_blank' href="#" className='navigation__icon'>
                            <FaGithub size={'48px'} fill={'inherit'}/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        : <button className='navigation__toggleButton button' onClick={() => HandleMenuToggle('open')}>
            <FaBars size={'32px'} fill={'inherit'} />
        </button>
    }
</nav> 
}