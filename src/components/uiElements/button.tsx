import React from 'react';
import { childrenType } from 'src/models/children';
import styled, { css } from "styled-components"

enum buttonVariant{
    MainFilled = 'primary',
    SecondaryFilled = 'secondary'
}

interface ButtonProps {
    children: childrenType,
    variant?: string,
}

const StyledButton = styled.button<{variant?: string}>`
    padding: 1rem 2rem;
    font-weight: bold;
    ${({variant}) => variant === buttonVariant.MainFilled && css`
        color: ${({theme}) => theme.palette.secondary.dark};
        background: ${({theme}) => theme.palette.primary.main};
    `}
    ${({variant}) => variant === buttonVariant.SecondaryFilled && css`
        color: ${({theme}) => theme.palette.primary.main};
        background: ${({theme}) => theme.palette.secondary.main};
    `}
`

export const Button: React.FC<ButtonProps> = ({children, variant}) => {
    return <StyledButton variant={variant}>{children}</StyledButton>
}
