import React, { PropsWithChildren } from 'react';
import { Header } from '@layout/Header';

export const Layout: React.FC<PropsWithChildren> = ({children}) => {
    return <>
        <Header />
        {children}
    </>
}