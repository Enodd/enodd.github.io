import React from 'react';
import styled from 'styled-components';
import EnoddLogo from '../../images/icons/enoddlogo.svg';

const PageHeader = styled.header`
    height: fit-content;
    width: 100%;
    padding: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
`

const PageNavigation = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Header = () => {

    return <PageHeader>
        <img src={EnoddLogo} />
        
    </PageHeader>
}