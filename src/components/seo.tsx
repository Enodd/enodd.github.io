import React from 'react';
import Helmet from 'react-helmet';
import { usePagedata } from '../hooks/usePagedata';

export const Seo: React.FC<{title: string}> = ({title}) => {
    const { pageName } = usePagedata();
    return <Helmet>
        <title>{`${title} | ${pageName}`}</title>
    </Helmet>
}