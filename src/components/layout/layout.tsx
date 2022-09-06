import React from 'react';
import styled, { useTheme } from 'styled-components';
import { Header } from '../../components/uiSections/header/header';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { Footer } from '../uiSections/footer';

const PageContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const PageContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PageLayout: React.FC<React.PropsWithChildren> = ({children}) => {
    const theme = useTheme();
    const isMdDown = useMediaQuery(theme.breakpoints.down('md'));
    return <PageContainer>
        <Header />
        {isMdDown && <>sidebar here</>}
        <PageContent>
            {children}
        </PageContent>
        <Footer />
    </PageContainer>;
};