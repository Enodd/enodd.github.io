import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div<{size: number}>`
    min-height: 100px;
    width: 100%;
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem auto;
    * {
        width: 33%;
    }
    ${({theme}) => theme.breakpoints.up('md')}{
        width: ${({size}) => 75 * (size / 100)}%;
    }
    ${({theme}) => theme.breakpoints.up('lg')}{
        width: ${({size}) => 50 * (size / 100)}%;
    }
    ${({theme}) => theme.breakpoints.up('xl')}{
        width: ${({size}) => 40 * (size / 100)}%;
    }

`;

const SeparatorIndicator = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const Line = styled.hr<{color?: string}>`
    height: 0px;
    width: 100%;
    border-left: 0;
    border-right: 0;
    border-bottom: 0;
    border-top: 4px solid ${({color, theme}) => color || theme.palette.primary.main};
    border-radius: 1rem;
`;

const Square = styled.span<{size: number, color?: string, rotation?: number}>`
    width: ${({size}) => size}vw;
    height: ${({size}) => size}vw;
    max-width: ${({size}) => size*7.5}px;
    max-height: ${({size}) => size*7.5}px;
    background-color: ${({color, theme}) => color || theme.palette.primary.main};
    transform: rotate(${({rotation}) => rotation || 0}deg);
`;

export const Separator: React.FC<{size: number, color?: string}> = ({ color, size }) => {

    return <Wrapper size={size}>
        <div>
            <Line color={color}/>
        </div>
        <SeparatorIndicator>
            <Square size={4} color={color} rotation={45}></Square>
            <Square size={5.5} color={color} rotation={45}></Square>
            <Square size={4} color={color} rotation={45}></Square>
        </SeparatorIndicator>
        <div>
            <Line color={color}/>
        </div>
    </Wrapper>;
};