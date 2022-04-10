import React from 'react'
import styled from 'styled-components'
import { useSiteData } from '../../../hooks/useSiteData'

const WebsiteFooter = styled.footer`
background-color: ${(props) => props.theme.colors.background.dark};
padding: 1rem 0;
text-align: center;
width: 100vw;

    `

export const Footer = () => {
    const {author, authorNickname} = useSiteData();
    return(
        <WebsiteFooter>
            <h3>{`${author} | ${authorNickname}`}</h3>
        </WebsiteFooter>
    )
}