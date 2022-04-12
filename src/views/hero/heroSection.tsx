import React from 'react'
import styled, {useTheme} from 'styled-components'
import { HeroSectionWaves } from './heroSectionWaves'
import { KeyboardArrowDownRounded } from '@mui/icons-material'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { useSiteData } from '../../hooks/useSiteData'

const HeroSectionContainer = styled.section`
    position: relative;
    width: 100%;
    height: 100vh;
    overflow-y: hidden;
`
const HeroSectionHeader = styled.h1`
    font-size: ${props => props.theme.fonts.fontSizes.s900};
    color: ${props => props.theme.colors.background.dark};
    text-align: center;
    height: fit-content;
    width: fit-content;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, 150%);
    opacity: 0;
    animation: .5s ease-in-out ${props => props.theme.animations.fadeInFromBottom} forwards;
`
const HeroSectionSubTitle = styled.p`
    font-size: ${props => props.theme.fonts.fontSizes.s600};
    color: ${props => props.theme.colors.background.dark};
    text-align: center;
    height: fit-content;
    width: fit-content;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, 155%);
    opacity: 0;
    animation: .5s ease-in-out ${props => props.theme.animations.fadeInFromBottom} forwards;
    animation-delay: 150ms;
`
const HeroSectionLink = styled(AnchorLink)`
    color: ${props => props.theme.colors.background.dark};
    position: absolute;
    top:37%;
    left: 50%;
    transform: translate(-50%, 160%);
    opacity: 0;
    animation: .5s ease-in-out ${props => props.theme.animations.fadeInFromBottom} forwards;
    animation-delay: 150ms;
`

export const HeroSection = () =>{
    const theme = useTheme();
    const {author, workplace} = useSiteData();
    
    return(
        <HeroSectionContainer>
            <HeroSectionHeader>
                {author}
            </HeroSectionHeader>
            <HeroSectionSubTitle>
                {workplace}
            </HeroSectionSubTitle>
            <HeroSectionLink to='/#about'>
                <KeyboardArrowDownRounded sx={{fill: theme.colors.background.dark, fontSize: theme.fonts.fontSizes.s900}} />
            </HeroSectionLink>
            <HeroSectionWaves /> 
        </HeroSectionContainer>
    )
}