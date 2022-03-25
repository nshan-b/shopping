import './src/styles/global.css'
import '@fontsource/open-sans'
import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { ToastContainer } from 'react-toastify';

export const wrapRootElement = ({element}) => {
    return (
        <div>
            {element}
            <ToastContainer limit={0} />
        </div>
    )
}

export const wrapPageElement = ({element}) => (
        <AnimatePresence exitBeforeEnter>
            {element}
        </AnimatePresence>
  );