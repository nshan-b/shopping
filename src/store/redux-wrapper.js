// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import persistStore from 'redux-persist/es/persistStore';
// import { connect } from 'react-redux';
// import createdStore from './store';

// const {store, persistor} = createdStore();

// console.log('store???')

// const ReduxWrapper = ({ element }) => (
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}> */}
//         {element}
//       </PersistGate>
//     </Provider>

// );

// persistor.subscribe(() => {
//     /* Hydrate React components when persistor has synced with redux store */
//     const { bootstrapped } = persistor.getState();
 
//     if (bootstrapped) {
//        ReactDOM.hydrate(<ReduxWrapper />, document.getElementById("__gatsby"));
//     }
//  });

// // const ReduxWrapper = ({ element }) => (
// //     <Provider store={store}>{element}</Provider>
// // );

// export default ReduxWrapper;