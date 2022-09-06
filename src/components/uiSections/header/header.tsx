import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { MobileMenu } from './mobileMenu';
import { Button } from '../../../components/uiElements/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const PageHeader = styled.header`
    height: fit-content;
    width: 100%;
    max-width: ${({theme}) => theme.constants.maxWidthRatio}px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 3rem;
    margin: 0 auto;
`;

const PageNavigation = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
`;
export const NavigationElement = styled.a`
    font-size: 1.1rem;
    font-weight: bold;
    color: #fff;
    text-decoration: none;
    position: relative;
    ${({theme}) => theme.breakpoints.down('md')}{
        padding-bottom: .4rem;
        border-bottom: 2px solid white;
    }
    ${({theme}) => theme.breakpoints.up('md')}{
        &:after{
            content: '';
            position: absolute;
            bottom: -3px;
            left: 0;
            width: 0;
            height: 3px;
            background-color: ${({theme}) => theme.palette.primary.main};
            border-radius: 1px;
            transition: 0.15s ease-in-out;
        }
        &:hover{
            &:after{
                width: 100%;
            }
        }
    }
`;
const logo = '../../../images/icons/enoddLogo.svg';

export const Header = () => {
    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
    const [menuOpen, setMenuOpen] = useState(false);

    return <PageHeader>
        <Link to='/'>
            <StaticImage src={logo} alt={'Website logo'} />
        </Link>
        {
            isMdUp
                ? (
                    <PageNavigation>
                        <NavigationElement href='#'>
                            About
                        </NavigationElement> 
                        <NavigationElement href='#'>
                            Portfolio
                        </NavigationElement> 
                        <NavigationElement href='#'>
                            Contact
                        </NavigationElement> 
                    </PageNavigation>
                ) : (
                    <>
                        <Button variant='secondary' onClick={() => setMenuOpen(true)}>
                            <FontAwesomeIcon icon={faBars} size='2x'/>
                        </Button>
                        <MobileMenu isMenuOpen={menuOpen} onMenuToggle={setMenuOpen}/>
                    </>
                ) 
        }   
    </PageHeader>;
};