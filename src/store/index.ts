import { githubReducer } from './github/github.slice';
import { githubAPI } from './github/github.api';
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
	reducer: {
		[githubAPI.reducerPath]: githubAPI.reducer,
		github: githubReducer
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(githubAPI.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>