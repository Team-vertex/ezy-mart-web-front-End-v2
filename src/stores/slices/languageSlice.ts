import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Locale = "en" | "si";

interface LanguageState {
  currentLocale: Locale;
}

const initialState: LanguageState = {
  currentLocale: "en",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLocale: (state, action: PayloadAction<Locale>) => {
      state.currentLocale = action.payload;
      // Store in localStorage for persistence
      localStorage.setItem("locale", action.payload);
    },
    initializeLocale: (state) => {
      // Get locale from localStorage or default to 'en'
      const storedLocale = localStorage.getItem("locale") as Locale;
      if (storedLocale && (storedLocale === "en" || storedLocale === "si")) {
        state.currentLocale = storedLocale;
      }
    },
  },
});

export const { setLocale, initializeLocale } = languageSlice.actions;
export default languageSlice.reducer;
