import styled from 'styled-components';

export const ContentWrapper = styled.main`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: ${({theme}) => theme.spacing(6)};
    width: 100%;
    max-width: ${({theme}) => theme.constants.maxWidthRatio}px;
    padding: 2rem;
    color: white;
    background: ${({theme}) => theme.palette.secondary.main}55;
    backdrop-filter: blur(4px);
`;