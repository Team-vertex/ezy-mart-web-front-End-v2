import { RootState } from "@/stores/rootReducer";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { useSelector } from "react-redux";

export const TranslationDebug: React.FC = () => {
  const currentLocale = useSelector(
    (state: RootState) => state.language.currentLocale
  );
  const intl = useIntl();

  // Test if the aboutUs.hero.title key exists
  const testKey = "aboutUs.hero.title";

  try {
    const message = intl.formatMessage({ id: testKey });
    console.log("Translation found:", {
      key: testKey,
      message,
      locale: currentLocale,
    });
  } catch (error) {
    console.error("Translation error:", {
      key: testKey,
      error,
      locale: currentLocale,
    });
  }

  return (
    <div
      style={{
        position: "fixed",
        top: "10px",
        right: "10px",
        background: "rgba(0,0,0,0.8)",
        color: "white",
        padding: "10px",
        borderRadius: "5px",
        zIndex: 9999,
        fontSize: "12px",
      }}
    >
      <div>Current Locale: {currentLocale}</div>
      <div>Test Key: {testKey}</div>
      <div>
        Result: <FormattedMessage id={testKey} defaultMessage="KEY_NOT_FOUND" />
      </div>
    </div>
  );
};
