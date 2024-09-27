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

    return <header className="bg-background-site flex flex-row justify-center items-center">
		<div className="py-4 px-8 fhd:px-4 flex flex-row justify-between items-center w-full max-w-screen-fhd border-b-2 border-b-contrastLight">
			<div className="flex flex-row items-center gap-2">
				<img src={'/images/favicon.svg'} className={'max-w-8 md:max-w-full'} alt="website logo" />
                <a href="/">
				    <h1>
                        Enodd
                    </h1>
                </a>
			</div>
        {isMdDown
            ? <HeaderMobile onAnchorClick={handleAnchorClick} />
            : <HeaderDesktop onAnchorClick={handleAnchorClick} />}
        </div>
    </header>
}