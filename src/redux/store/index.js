import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { contactsApi } from 'redux/slices/contacts';

import filter from 'redux/slices/filter';

const rootReducer = {
  filter,
};


const store = configureStore({
  reducer: {
    filter: filter,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
  devTools: process.env.NODE_ENV !== 'production',
});

setupListeners(store.dispatch)

export default store;

// import { configureStore } from '@reduxjs/toolkit';
// import contacts from 'redux/slices/contacts';
// import filter from 'redux/slices/filter';

// const rootReducer = {
//   contacts,
//   filter,
// };

// const store = configureStore({
//   reducer: rootReducer,
//   devTools: process.env.NODE_ENV !== 'production',
// });

// export default store;
