import React from 'react';

export const HeaderDesktop: React.FC<{
    onAnchorClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
}> = ({ onAnchorClick }) => {

    return <nav>
        <ul className="flex gap-5 list-none">
            <li>
                <a href="#aboutSection" onClick={onAnchorClick}>
                    About
                </a>
            </li>
            <li>
                <a href="#work" onClick={onAnchorClick}>
                    Work
                </a>
            </li>
            <li>
                <a href="#contact" onClick={onAnchorClick}>
                    Contact
                </a>
            </li>
	    </ul>
	</nav>
}