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
    handleSettingsChange: (props: { cookies: boolean, animations: boolean }) => void;
    refreshValues: () => void;
}

export const ConfigurationContext = createContext<ConfigurationInterface>({
    isAnimationDisabled: false, isCookieAllowed: false, toggleAnimation: () => {}, setDefaultValues: () => {}, acceptCookies: () => {}, handleSettingsChange: () => {}, refreshValues: () => {}
});

export const ConfigurationProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [isAnimationDisabled, setIsAnimationDisabled] = useState<boolean>(false);
    const [isCookieAllowed, setIsCookieAllowed] = useState<boolean>(false);
    const { getItem, removeItem, changeValue } = useStorage();

    const handleAnimationToggle = () => {
        setIsAnimationDisabled(prevState => !prevState);
    };

    const handleSettingsChange = (props: { cookies: boolean, animations: boolean }) => {
        const { cookies, animations } = props;
        changeValue(StorageItems.ANIMATION, animations);
        changeValue(StorageItems.COOKIES, cookies);
        setIsCookieAllowed(cookies);
        setIsAnimationDisabled(animations);
    };

    const setDefaultValues = () => {
        removeItem(StorageItems.COOKIES);
        removeItem(StorageItems.ANIMATION);
        setIsAnimationDisabled(false);
        setIsCookieAllowed(false);
    };

    const acceptCookies = () => {
        changeValue(StorageItems.COOKIES, true);
        setIsCookieAllowed(true);
    };

    const refreshValues = () => {
        const animations = getItem(StorageItems.ANIMATION);
        const cookies = getItem(StorageItems.COOKIES);
        // todo: check why this isn't working rn
        console.log('Is cookie allowed:', cookies !== null ? cookies === 'true' : false);
        console.log('isAnimationDisabled', animations !== null ? animations !== 'true' : false);
        setIsCookieAllowed(cookies !== null ? cookies === 'true' : false);
        setIsAnimationDisabled(animations !== null ? animations !== 'true' : false);
        MotionGlobalConfig.skipAnimations = isAnimationDisabled;
    };

    useEffect(() => {
        refreshValues();
    }, [isAnimationDisabled, isCookieAllowed]);

    return <ConfigurationContext.Provider value={{
        isAnimationDisabled, toggleAnimation: handleAnimationToggle, setDefaultValues , acceptCookies, isCookieAllowed, handleSettingsChange, refreshValues
    }}>
        {children}
    </ConfigurationContext.Provider>;
};