import { createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk for user login
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await fetch("https://your-api.com/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message);

      // Save token to localStorage
      localStorage.setItem("token", data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for user signup
export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await fetch("https://your-api.com/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message);

      // Save token to localStorage
      localStorage.setItem("token", data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


