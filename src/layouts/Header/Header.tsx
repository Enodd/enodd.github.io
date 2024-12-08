import React from 'react';
import { HeaderDesktop } from '@layouts/Header/Header.desktop';
import { HeaderMobile } from '@layouts/Header/Header.mobile';
import { theme } from '@theme/index';
import { useMediaQuery } from '@hooks/useMediaQuery';

export const Header: React.FC = () => {
    const isMdDown = useMediaQuery(theme.breakpoints.down('md'));

    const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const targetAnchor = e.currentTarget.getAttribute('href');
        if (targetAnchor === null) return;
        const target = document.querySelector(targetAnchor);
        target?.scrollIntoView({
            behavior: 'smooth'
        })
    }

    return <header id="core-header" className="bg-background-site flex flex-row justify-center items-center w-screen sticky top-[-1px] z-10 pt-4">
		<div className="py-4 px-8 fhd:px-4 flex flex-row justify-between items-center w-full max-w-screen-fhd border-b-2 border-b-contrastLight">
			<div className="flex flex-row items-center gap-2">
                <a href="/">
				    <img src={'/images/newLogo.svg'} className={'max-w-10 md:max-w-10'} alt="website logo" />
                </a>
			</div>
        {isMdDown
            ? <HeaderMobile onAnchorClick={handleAnchorClick} />
            : <HeaderDesktop onAnchorClick={handleAnchorClick} />}
        </div>
    </header>
}