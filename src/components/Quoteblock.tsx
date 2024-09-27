import React from 'react';

type quoteSize = '5xl' | '4xl' | '3xl' | '2xl' | 'xl' | 'lg' | 'base';

export const Quoteblock: React.FC<{quote: string, separator?: string, size?: quoteSize}> = ({ quote, separator, size }) => {
    
    return <div className='quoteblock'>
        {
            quote.split(separator || ' ').map((part, index) => {
                return <p key={`quote-${index}`} className={`${size ? `text-${size}`:'text-xl'} text-contrastLight`}>
                    {part}
                </p>
            })
        }
    </div>
}