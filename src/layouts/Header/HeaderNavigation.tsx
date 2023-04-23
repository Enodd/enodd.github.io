import React from "react";

export const HeaderNavigation: React.FC<{onAnchorClick: (e) => void}> = ({ onAnchorClick }) => {
    return <nav className="core-header__navigation navigation">
    <ul className="navigation__list list list--horizontal">
        <li className="list__element">
            <a
                href="#about"
                onClick={(e) => onAnchorClick(e)}>
                    About
                </a>
        </li>
        <li className="list__element">
            <a
                href="#portfolio"
                onClick={(e) => onAnchorClick(e)}>
                    Portfolio
                </a>
        </li>
        <li className="list__element">
            <a
                href="#contact"
                onClick={(e) => onAnchorClick(e)}>
                    Contact
                </a>
        </li>
    </ul>
</nav> 
}