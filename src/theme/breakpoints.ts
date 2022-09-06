export const breakpoints = {
    up: (size: string) => {
        switch(size){
        case 'xs':
            return '@media(min-width: 0px)';
        case 'sm':
            return '@media(min-width: 600px)';
        case 'md': 
            return '@media(min-width: 900px)';
        case 'lg':
            return '@media(min-width: 1360px)';
        case 'xl':
            return '@media(min-width: 1920px)';
        default: {
            return '';
        }
        }
    },
    down: (size: string) => {
        switch(size){
        case 'sm':
            return '@media(max-width: 599px)';
        case 'md': 
            return '@media(max-width: 899px)';
        case 'lg':
            return '@media(max-width: 1359px)';
        case 'xl':
            return '@media(max-width: 1919x)';
        default: {
            return '';
        }
        }
    }
};