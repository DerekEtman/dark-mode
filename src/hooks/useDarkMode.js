import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = ( initialValues ) => {

    const [dark, setDark] = useLocalStorage('dark', initialValues);
    
    useEffect (() => {

        const body = document.querySelector('body');
        dark ? body.classList.add('dark-mode') : body.classList.remove('dark-mode');
        
    },[dark]);

    return [dark, setDark];
}