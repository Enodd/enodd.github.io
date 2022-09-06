import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { NavigationElement } from './header';
import { gsap } from 'gsap';
import { Button } from '../../../components/uiElements/button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons';

interface MobileMenuProps {
    isMenuOpen: boolean,
    onMenuToggle: (toggle: boolean) => void,
}

const Menu = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    transform-origin: top;
    z-index: 1;
    :before{
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        right: 0;
        background-color: ${({theme}) => theme.palette.secondary.main}cb;
        backdrop-filter: blur(4px);
        z-index: -1;
    }
`;

const MenuClose = styled.span`
    position: absolute;
    top: 1.5rem;
    right: 3rem;
`;

export const MobileMenu: React.FC<MobileMenuProps> = ({isMenuOpen, onMenuToggle}) => {
    const menuRef = useRef(null);

    useEffect(() => {
        gsap.timeline()
            .from(menuRef.current, {
                duration: 0.4,
                ease: 'power3.out',
                transform: 'scaleY(0)',
            }).to(menuRef.current, {
                duration: 0.4,
                ease: 'power3.out',
                transform: 'scaleY(1)',
            });
    },[isMenuOpen]);

    const closeAnimation = () => {
        gsap.timeline().to(menuRef.current, {
            duration: 0.4,
            ease: 'power3.out',
            transform: 'scaleY(0)'
        });
    };
    const handleMenuToggle = () => {
        closeAnimation();
        setTimeout(() => onMenuToggle(false), 400);
    };

    if(!isMenuOpen){
        return <></>;
    }

    return (
        <Menu ref={menuRef}>
            <MenuClose>
                <Button variant='primary' onClick={handleMenuToggle}>
                    <FontAwesomeIcon icon={faXmark} size='2x'/>
                </Button>
            </MenuClose>
            <NavigationElement href='#'>
                About
            </NavigationElement>
            <NavigationElement href='#'>
                Portfolio
            </NavigationElement>
            <NavigationElement href='#'>
                Contact
            </NavigationElement>
        </Menu>
    );
};