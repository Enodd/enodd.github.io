import React from 'react';

export const HeaderDesktop: React.FC<{
    onAnchorClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
}> = ({ onAnchorClick }) => {

    return <nav className="z-10">
        <ul className="flex gap-5 list-none">
            <li>
                <a href="#aboutSection" onClick={onAnchorClick}>
                    About
                </a>
            </li>
            <li>
                <a href="#workSection" onClick={onAnchorClick}>
                    Work
                </a>
            </li>
            <li>
                <a href="#contactSection" onClick={onAnchorClick}>
                    Contact
                </a>
            </li>
	    </ul>
	</nav>
}