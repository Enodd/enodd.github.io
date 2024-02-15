import React, { PropsWithChildren, createContext, useEffect, useState } from 'react';
import { MotionGlobalConfig } from 'framer-motion';
import { useStorage } from '@storage/useStorage';
import { StorageItems } from '@storage/storageItems';
import { useTranslation } from 'react-i18next';

interface ConfigurationInterface {
    isAnimationDisabled: boolean;
    isCookieAllowed: boolean;
    userSetLanguage: string;
    toggleAnimation: () => void;
    setDefaultValues: () => void;
    acceptCookies: () => void;
    handleSettingsChange: (props: { cookies: boolean, animations: boolean, language: string }) => void;
    refreshValues: () => void;
}

export const ConfigurationContext = createContext<ConfigurationInterface>({
    isAnimationDisabled: false,
    isCookieAllowed: false,
    userSetLanguage: 'en',
    toggleAnimation: () => {},
    setDefaultValues: () => {},
    acceptCookies: () => {},
    handleSettingsChange: () => {},
    refreshValues: () => {}
});

export const ConfigurationProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const { i18n } = useTranslation();
    const [isAnimationDisabled, setIsAnimationDisabled] = useState<boolean>(false);
    const [isCookieAllowed, setIsCookieAllowed] = useState<boolean>(false);
    const [currentLanguage, setCurrentLanguage] = useState<typeof i18n.language>(i18n.language);
    const { getItem, removeItem, changeValue } = useStorage();

    const handleAnimationToggle = () => {
        setIsAnimationDisabled(prevState => !prevState);
    };

    const handleSettingsChange = (props: { cookies: boolean, animations: boolean; language: string }) => {
        const { cookies, animations, language } = props;
        changeValue(StorageItems.ANIMATION, animations);
        changeValue(StorageItems.COOKIES, cookies);
        changeValue(StorageItems.LANGUAGE, language);
        setIsCookieAllowed(cookies);
        setIsAnimationDisabled(animations);
        setCurrentLanguage(language);
    };

    const setDefaultValues = () => {
        removeItem(StorageItems.COOKIES);
        removeItem(StorageItems.ANIMATION);
        setIsAnimationDisabled(false);
        setIsCookieAllowed(false);
        setCurrentLanguage(i18n.language);
    };

    const acceptCookies = () => {
        changeValue(StorageItems.COOKIES, true);
        setIsCookieAllowed(true);
    };

    const refreshValues = () => {
        const animations = getItem(StorageItems.ANIMATION);
        const cookies = getItem(StorageItems.COOKIES);
        const language = getItem(StorageItems.LANGUAGE);
        setIsCookieAllowed(cookies !== null ? cookies === 'true' : false);
        setIsAnimationDisabled(animations !== null ? animations !== 'true' : false);
        setCurrentLanguage(prev => prev);
        MotionGlobalConfig.skipAnimations = isAnimationDisabled;
        i18n.changeLanguage(language !== null ? language : 'en');
    };

    useEffect(() => {
        refreshValues();
    }, [isAnimationDisabled, isCookieAllowed, currentLanguage]);

    return <ConfigurationContext.Provider value={{
        isAnimationDisabled, userSetLanguage: currentLanguage, toggleAnimation: handleAnimationToggle, setDefaultValues , acceptCookies, isCookieAllowed, handleSettingsChange, refreshValues
    }}>
        {children}
    </ConfigurationContext.Provider>;
};