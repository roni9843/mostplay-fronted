import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice"; // Corrected import path

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializability check if needed
    }),
});

export default store;
