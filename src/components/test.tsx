import React from 'react';
import { childrenType } from 'src/models/children';
import { useTheme } from 'styled-components';

type Props = {
    children: childrenType;
}

export const Test: React.FC<Props> = ({ children }) => {
    const theme = useTheme();
    return <>
    <div style={{background: theme.palette.primary.main}}>
        {children}
    </div></>
}