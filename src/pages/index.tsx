import React from 'react';
import { Seo } from '../components/seo';
import { usePagedata } from '../hooks/usePagedata';
import { theme } from '../theme/theme';
import { ThemeProvider } from 'styled-components';
import GlobalCss from '../theme/Globalstyles';
import { Test } from '../components/test';
import { Button } from '../components/uiElements/button';
import { Header } from '../components/uiSections/header';

const IndexPage = () => {
  const {author, workTitle} = usePagedata();
  return <ThemeProvider theme={theme}>
    <GlobalCss {...theme}/>
    <Seo title='Homepage'/>
    <Header />
    <h1 style={{color: theme.palette.primary.main}}>{author}</h1>
    <h2>{workTitle}</h2>
    <Button variant='secondary'>Test</Button>
    <br />
    <Test>
      Testing
    </Test>
  </ThemeProvider>;
}

export default IndexPage;