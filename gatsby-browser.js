import './src/styles/global.css'
import '@fontsource/open-sans'
import React from 'react';
import {AnimatePresence} from 'framer-motion';

export const wrapRootElement = ({element}) => {
    return (
        <div>{element}</div>
    )
}

export const wrapPageElement = ({element}) => (
    <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
  );