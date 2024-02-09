import React, { PropsWithChildren, createContext, useEffect, useState } from 'react';
import { MotionGlobalConfig } from 'framer-motion';

interface ConfigurationInterface {
    isAnimationDisabled: boolean;
    toggleAnimation: () => void;
}

export const ConfigurationContext = createContext<ConfigurationInterface>({ isAnimationDisabled: false, toggleAnimation: () => {} });

export const ConfigurationProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [isAnimationDisabled, setIsAnimationDisabled] = useState<boolean>(false);

    const handleAnimationToggle = () => {
        setIsAnimationDisabled(prevState => !prevState);
    };

    useEffect(() => {
        MotionGlobalConfig.skipAnimations = isAnimationDisabled;
    }, [isAnimationDisabled]);

    return <ConfigurationContext.Provider value={{ isAnimationDisabled, toggleAnimation: handleAnimationToggle }}>
        {children}
    </ConfigurationContext.Provider>;
};