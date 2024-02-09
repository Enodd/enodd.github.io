import { ConfigurationContext } from '@providers/ConfigurationProvider';
import { useContext } from 'react';

export const useConfigurationProvider = () => {
    const configuration = useContext(ConfigurationContext);
    return configuration;
};