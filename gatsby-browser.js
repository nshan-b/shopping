import './src/styles/global.css'
import '@fontsource/open-sans'
import React from 'react';

export const wrapRootElement = ({element}) => {
    return (
        <div>{element}</div>
    )
}