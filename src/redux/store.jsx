import { configureStore } from '@reduxjs/toolkit';
import softReducer from './soft2Slice'

export default configureStore({
	reducer: {
        soft: softReducer,
    },
});