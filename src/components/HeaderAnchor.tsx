import { Button } from '@mui/material';
import React from 'react';

interface Anchor {
    content: string;
    target: string;
}

export const HeaderAnchor: React.FC<Anchor> = ({ content, target }) => {

    const onAnchorClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        const _target = document.querySelector(target);
        _target?.scrollIntoView({ behavior: 'smooth' });
    };

    return <Button variant="text" size='large' sx={{ textTransform: 'capitalize', textAlign: 'center' }} onClick={(e) => onAnchorClick(e)}>
        {content}
    </Button>;
};