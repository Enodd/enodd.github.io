import React from 'react';
import styled from 'styled-components';
import { Typography } from './typography';

interface SectionHeaderProps {
    title: string,
    details?: string
}

const Wrapper = styled.div`
    width: 80%;
    margin: 0 auto;
`;

export const SectionHeader: React.FC<SectionHeaderProps> = ({title, details}) => {
    return <Wrapper>
        <Typography variant='h2' color='primary'>
            {title}
        </Typography>
        {details &&
            <Typography variant="body1">
                {details}
            </Typography>
        }
    </Wrapper>;
};