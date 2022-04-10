import React from 'react'
import styled, {keyframes} from 'styled-components'

const WaveIn = keyframes`
    to {
        transform: translateY(0);
        opacity: 100%;
    }
`
const Wave = styled.svg`
        width: 100%;
        position: absolute;
        bottom: 0%;
        left: 0%;
        opacity: 0;
        transform: translateY(200%);
        animation: .75s ease-in-out ${WaveIn} forwards;
        &:nth-of-type(1){
            bottom: 12%;
            fill: ${props => props.theme.colors.highlight.primary};
            animation-delay: 250ms;
        }
        &:nth-of-type(2){
            bottom: 9%;
            fill: ${props => props.theme.colors.highlight.secondary};
            animation-delay: 350ms;
        }
        &:nth-of-type(3){
            bottom: 6%;
            fill: ${props => props.theme.colors.background.primary}; 
            animation-delay: 450ms;
        }
        &:nth-of-type(4){
            bottom: 3%;
            fill: ${props => props.theme.colors.background.secondary}; 
            animation-delay: 550ms;
        }
        &:nth-of-type(5){
            fill: ${props => props.theme.colors.background.dark}; 
            animation-delay: 650ms;
        }
    `

export const HeroSectionWaves = () => {
    return(
        <>
        <Wave xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="inherit" fill-opacity="1" d="M0,64L40,80C80,96,160,128,240,122.7C320,117,400,75,480,64C560,53,640,75,720,112C800,149,880,203,960,186.7C1040,171,1120,85,1200,48C1280,11,1360,21,1400,26.7L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z">
            </path>
        </Wave><Wave xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="inherit" fill-opacity="1" d="M0,0L34.3,37.3C68.6,75,137,149,206,170.7C274.3,192,343,160,411,144C480,128,549,128,617,122.7C685.7,117,754,107,823,117.3C891.4,128,960,160,1029,144C1097.1,128,1166,64,1234,32C1302.9,0,1371,0,1406,0L1440,0L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z">
                </path>
            </Wave><Wave xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="inherit" fill-opacity="1" d="M0,96L34.3,101.3C68.6,107,137,117,206,133.3C274.3,149,343,171,411,202.7C480,235,549,277,617,261.3C685.7,245,754,171,823,128C891.4,85,960,75,1029,64C1097.1,53,1166,43,1234,53.3C1302.9,64,1371,96,1406,112L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z">
                </path>
            </Wave><Wave xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="inherit" fill-opacity="1" d="M0,160L40,160C80,160,160,160,240,176C320,192,400,224,480,202.7C560,181,640,107,720,96C800,85,880,139,960,170.7C1040,203,1120,213,1200,186.7C1280,160,1360,96,1400,64L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z">
                </path>
            </Wave><Wave xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="inherit" fill-opacity="1" d="M0,64L48,90.7C96,117,192,171,288,170.7C384,171,480,117,576,117.3C672,117,768,171,864,197.3C960,224,1056,224,1152,229.3C1248,235,1344,245,1392,250.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                </path>
            </Wave>
        </>
    )
}