import React, { PropsWithChildren, createContext, useEffect, useState } from 'react';
import { MotionGlobalConfig } from 'framer-motion';
import { useStorage } from '@storage/useStorage';
import { StorageItems } from '@storage/storageItems';

interface ConfigurationInterface {
    isAnimationDisabled: boolean;
    isCookieAllowed: boolean;
    toggleAnimation: () => void;
    setDefaultValues: () => void;
    acceptCookies: () => void;
}

export const ConfigurationContext = createContext<ConfigurationInterface>({
    isAnimationDisabled: false, isCookieAllowed: false, toggleAnimation: () => {}, setDefaultValues: () => {}, acceptCookies: () => {}
});

export const ConfigurationProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [isAnimationDisabled, setIsAnimationDisabled] = useState<boolean>(false);
    const [isCookieAllowed, setIsCookieAllowed] = useState<boolean>(false);
    const { addItem, getItem, removeItem } = useStorage();

    const handleAnimationToggle = () => {
        setIsAnimationDisabled(prevState => !prevState);
    };
    const setDefaultValues = () => {
        setIsAnimationDisabled(false);
        removeItem(StorageItems.COOKIES);
        removeItem(StorageItems.ANIMATION);
        setIsCookieAllowed(false);
    };
    const acceptCookies = () => {
        addItem(StorageItems.COOKIES, true);
        setIsCookieAllowed(true);
    };
    const refreshValues = () => {
        const animations = getItem(StorageItems.ANIMATION);
        const cookies = getItem(StorageItems.COOKIES);
        setIsCookieAllowed(cookies !== null ? cookies === 'true' : false);
        setIsAnimationDisabled(animations !== null ? animations !== 'true' : false);
        MotionGlobalConfig.skipAnimations = isAnimationDisabled;
    };

    useEffect(() => {
        refreshValues();
    }, [isAnimationDisabled, isCookieAllowed]);

    return <ConfigurationContext.Provider value={{
        isAnimationDisabled, toggleAnimation: handleAnimationToggle, setDefaultValues , acceptCookies, isCookieAllowed
    }}>
        {children}
    </ConfigurationContext.Provider>;
};