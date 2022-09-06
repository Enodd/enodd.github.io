import { useEffect, useState } from 'react';

export const useMediaQuery = (mediaQuery: string) => {
    const [isMediaMatching, setIsMediaMatching] = useState(false);
    const match = mediaQuery.replace('@media', '');
    

    useEffect(() => {
        const mediaWatcher = window.matchMedia(match);

        if(mediaWatcher.matches !== isMediaMatching){
            setIsMediaMatching(mediaWatcher.matches);
        }
        const updateMedia = () =>{
            setIsMediaMatching(mediaWatcher.matches);
        };

        window.addEventListener('resize', () => updateMedia());
        return window.removeEventListener('resize', () => updateMedia());
    }, [isMediaMatching, mediaQuery]);
    return isMediaMatching;
};