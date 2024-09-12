import React from 'react';
import { HeaderDesktop } from '@layouts/Header/Header.desktop';
import { HeaderMobile } from '@layouts/Header/Header.mobile';
import { theme } from '@theme/index';
import { useMediaQuery } from '@hooks/useMediaQuery';

export const Header: React.FC = () => {
    const isMdDown = useMediaQuery(theme.breakpoints.down('md'));

    return <header className="bg-background-site flex flex-row justify-center items-center">
		<div className="py-4 px-8 fhd:px-4 flex flex-row justify-between items-center w-full max-w-screen-fhd border-b-2 border-b-contrastLight">
			<div className="flex flex-row items-center gap-2">
				<img src={'/images/favicon.svg'} alt="website logo" />
				<h1>Enodd</h1>
			</div>
        {isMdDown
            ? <HeaderMobile />
            : <HeaderDesktop />}
        </div>
    </header>
}