

// store.js
import { configureStore } from '@reduxjs/toolkit';
import chatSlice from './chatSlice';


const store = configureStore({
    reducer:{
        
        user_chat: chatSlice

    }

})  

export default store;
