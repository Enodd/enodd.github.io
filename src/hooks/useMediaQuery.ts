import { useEffect, useState } from "react"

const MediaQueries = {
    xsUp: '@media (min-width: 0px)',
    smUp: '@media (min-width: 600px)',
    smDown: '@media (max-width: 600px)',
    mdUp: '@media (min-width: 900px)', 
    mdDown: '@media (max-width: 900px)', 
    lgUp: '@media (min-width: 1200px)', 
    lgDown: '@media (max-width: 1200px)', 
    xlUp: '@media (min-width: 1600px)', 
    xlDown: '@media (max-width: 1600px)',
}

export const useMediaQuery = (mediaQuery: keyof typeof MediaQueries) => {
    const [isMediaMatching, setIsMediaMatching] = useState(false);
    const match = MediaQueries[mediaQuery].replace('@media', '');

    useEffect(() => {
        const mediaWatcher = window.matchMedia(match);
        if (mediaWatcher.matches !== isMediaMatching) { 
            setIsMediaMatching(mediaWatcher.matches);
        }
        const updateMedia = () => {
            setIsMediaMatching(mediaWatcher.matches);
        }

        window.addEventListener('resize', () => updateMedia());
        return window.removeEventListener('resize', () => updateMedia());
    }, [isMediaMatching, match]);

    return isMediaMatching;    
}