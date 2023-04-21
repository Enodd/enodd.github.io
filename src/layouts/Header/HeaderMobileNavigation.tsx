import React, { useRef, useState } from 'react';
import { FaBars, FaGithub, FaLinkedin, FaTimes, FaTwitter } from 'react-icons/fa'; 

export const HeaderMobileNavigation: React.FC<{onAnchorClick: (e: any) => void}> = ({onAnchorClick}) => {
    const menuRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
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
                <button className='navigation__toggleButton button button--transparentBg' onClick={() => HandleMenuToggle('close')}>
                    <FaTimes />
                </button> 
            </div>
            <ul className="navigation__list list list--vertical">
                <li className="list__element">
                    <a href="#about" onClick={(e) => HandleAnchorClick(e)}>About</a>
                </li>
                <li className="list__element">
                    <a href="#portfolio" onClick={(e) => HandleAnchorClick(e)}>Portfolio</a>
                </li>
                <li className="list__element">
                    <a href="#Contact" onClick={(e) => HandleAnchorClick(e)}>Contact</a>
                </li>
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
        : <button className='navigation__toggleButton button button--transparentBg' onClick={() => HandleMenuToggle('open')}>
            <FaBars />
        </button>
    }
</nav> 
}