import { useConfigurationProvider } from '@hooks/useConfigurationProvider';
import { useCallback } from 'react';

export const useAnimations = () => {
    const { isAnimationDisabled } = useConfigurationProvider();
    
    const getTransitionProps = useCallback((time: number, delay: number) => {
        if (isAnimationDisabled) {
            return {
                duration: 0,
                delay: 0
            };
        }
        return {
            duration: time,
            delay
        };
    }, [isAnimationDisabled]);

    return { getTransitionProps };
};