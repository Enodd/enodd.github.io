import { SiReact, SiTypescript, SiAstro } from 'react-icons/si';
import AuthorImage from '@data/authorImage.png';
import '../../styles/heroSection.scss';
import { SiteConfig } from '@models/config';
import React from 'react';
import { useMediaQuery } from '@hooks/useMediaQuery';

const HeroSection = () => {

    const isMdDown = useMediaQuery('mdDown');

    return <section className='section section__hero-section hero-section'>
    <div className='stack--vertical-aCentered' style={{gap: isMdDown ? '1.2rem' : '0.5rem'}}>
        <h2 className='hero-section__title'>
            Hi There!
        </h2>
        <p className='hero-section__text'>
            I'm Damian, a {SiteConfig.author.age} year old
        </p>
        <span className='hero-section__highlight'>
            Front-end Developer
        </span>
        <div className='hero-section__stack'>
            <SiTypescript size='32px' fill={'inherit'} />
            <SiReact size='32px' fill={'inherit'} />
            <SiAstro size='32px' fill={'inherit'} />
        </div>
    </div>
    <img src={AuthorImage} alt="image of website's author" style={{ maxWidth: '350px', height: 'auto' }}/>
</section>
}

export default HeroSection;
