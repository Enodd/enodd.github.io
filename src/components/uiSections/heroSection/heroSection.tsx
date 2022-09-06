import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styled, { useTheme } from 'styled-components';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { usePagedata } from '../../../hooks/usePagedata';
import HeroSectionImage from '../../../images/heroSectionImage.png';
import { isInViewport } from '../../../utils/isInViewport';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { Typography } from '../../uiElements/typography';

const HeroSectionBox = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50vh;
    min-height: 20rem;
    background-image: url(${HeroSectionImage});
    background-size: cover;
`;

const ContentWrapper = styled.div`
    text-align: center;
`;

const Arrow = styled(FontAwesomeIcon)`
    position: relative;
    margin-top: 2rem;
    color: ${({theme}) => theme.palette.primary.main};
`;


export const HeroSection = () => {
    const { author, workTitle } = usePagedata();
    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
    const ArrowRef = useRef(null);
    const SectionRef = useRef<HTMLDivElement>(null);
    
    const paralaxMonitor = () => {
        const value = window.scrollY;
        console.log(isInViewport(ArrowRef.current));
        if(SectionRef.current != null) {
            SectionRef.current.style.transform = `translateY(-${Math.min(value * 0.05, 100)}%)`;
        }
    };
    useEffect(() => {
        isMdUp && window.addEventListener('scroll', paralaxMonitor);
        const Animation = isMdUp && isInViewport(ArrowRef.current) && gsap.timeline({ repeat: -1 }).from(
            ArrowRef.current, {
                duration: 1,
                transform: 'translateY(0%)'
            }
        ).to(ArrowRef.current, {
            duration: 1,
            transform: 'translateY(40%)',
        }).to(ArrowRef.current, {
            duration: 1,
            transform: 'translateY(0%)'
        });
        return () => {
            Animation && Animation.kill();
            window.removeEventListener('scroll', paralaxMonitor);
        };
    });

    return <HeroSectionBox ref={SectionRef}>
        <ContentWrapper>
            <Typography variant='h1' color='primary' style={{fontSize: theme.fontSizes.headingSize}}>{author}</Typography>
            <Typography variant='h2' color='white'>{workTitle}</Typography>
            <Arrow ref={ArrowRef} icon={faAngleDown} size='3x'/>
        </ContentWrapper>
    </HeroSectionBox>;
};