import { createSlice} from "@reduxjs/toolkit";
import { fetchThemeConfig } from "./themeThunks";



const initialState = {
  primaryColor: "#194298",
  secondaryColor: "#F7B704",
  whiteColor: "#FFFFFF",
  logoLink: "/",
  language: "en",
  loading: true, // Added loading state
  error: null,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setPrimaryColor: (state, action) => {
      state.primaryColor = action.payload;
    },
    setSecondaryColor: (state, action) => {
      state.secondaryColor = action.payload;
    },
    setLogoLink: (state, action) => {
      state.logoLink = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchThemeConfig.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchThemeConfig.fulfilled, (state, action) => {
        state.primaryColor = action.payload.primaryColor || state.primaryColor;
        state.secondaryColor = action.payload.secondaryColor || state.secondaryColor;
        state.logoLink = action.payload.logoLink || state.logoLink;
        state.language = action.payload.language || state.language;
        state.loading = false;
      })
      .addCase(fetchThemeConfig.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setPrimaryColor, setSecondaryColor, setLogoLink, setLanguage } = themeSlice.actions;
export default themeSlice.reducer;

