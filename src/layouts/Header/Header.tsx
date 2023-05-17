import React from 'react';
import { HeaderMobileNavigation } from '@layouts/Header/HeaderMobileNavigation';
import { HeaderNavigation } from '@layouts/Header/HeaderNavigation';
import { useMediaQuery } from '@hooks/useMediaQuery';
import '../../styles/header.scss';

export const Header: React.FC = () => {
    const isMdDown = useMediaQuery('mdDown');

    const goToAnchor = (e) => {
        e.preventDefault();
        const _anchor = (e.target.href as string).replace(window.location.href, '');
        const target = document.querySelector(_anchor);
        target.scrollIntoView({behavior: 'smooth'});
    }


    return <header className="core-header">
        <div className="core-header__logo">
            <img src="/PageLogo.svg" alt="website's logo" style={{maxWidth: '48px'}} />
        </div>
        {
            isMdDown
                ? <HeaderMobileNavigation onAnchorClick={goToAnchor} />
                : <HeaderNavigation onAnchorClick={goToAnchor} />
        }
    </header>
}
