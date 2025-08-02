import { RootState } from "@/stores/rootReducer";
import { Locale, setLocale } from "@/stores/slices/languageSlice";
import { Button, Menu } from "@mantine/core";
import { IconChevronDown, IconLanguage } from "@tabler/icons-react";
import React from "react";
import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";

interface LanguageSwitchProps {
  variant?: "default" | "footer";
  className?: string;
}

export const LanguageSwitch: React.FC<LanguageSwitchProps> = ({
  variant = "default",
  className = "",
}) => {
  const dispatch = useDispatch();
  const currentLocale = useSelector(
    (state: RootState) => state.language.currentLocale
  );

  const handleLanguageChange = (locale: Locale) => {
    dispatch(setLocale(locale));
  };

  const languages = [
    { code: "en" as Locale, name: "English", nativeName: "English" },
    { code: "si" as Locale, name: "Sinhala", nativeName: "සිංහල" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === currentLocale);

  if (variant === "footer") {
    return (
      <Menu shadow="md" width={200}>
        <Menu.Target>
          <Button
            variant="subtle"
            color="white"
            leftSection={<IconLanguage size={18} />}
            rightSection={<IconChevronDown size={14} />}
            className={`text-white hover:text-blue-300 transition-colors ${className}`}
            styles={{
              root: {
                backgroundColor: "transparent",
                border: "none",
                color: "white",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              },
            }}
          >
            <FormattedMessage id="common.language" />:{" "}
            <span className={currentLanguage?.code === 'si' ? 'font-sans-sinhala' : ''}>
              {currentLanguage?.nativeName}
            </span>
          </Button>
        </Menu.Target>
        <Menu.Dropdown>
          {languages.map((language) => (
            <Menu.Item
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={
                currentLocale === language.code
                  ? "bg-blue-50 text-blue-600"
                  : ""
              }
            >
              <div className="flex items-center gap-4">
                <span className={`font-medium ${language.code === 'si' ? 'font-sans-sinhala' : ''}`}>
                  {language.nativeName}
                </span>
                <span className="text-sm text-gray-500">({language.name})</span>
              </div>
            </Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>
    );
  }

  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Button
          variant="light"
          color="blue"
          leftSection={<IconLanguage size={18} />}
          rightSection={<IconChevronDown size={14} />}
          className={`bg-white/80 backdrop-blur-sm border border-blue-200 hover:bg-blue-50 transition-all ${className}`}
        >
          <span className={currentLanguage?.code === 'si' ? 'font-sans-sinhala' : ''}>
            {currentLanguage?.nativeName}
          </span>
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        {languages.map((language) => (
          <Menu.Item
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={
              currentLocale === language.code ? "bg-blue-50 text-blue-600" : ""
            }
          >
            <div className="flex items-center gap-4">
              <span className={`font-medium ${language.code === 'si' ? 'font-sans-sinhala' : ''}`}>
                {language.nativeName}
              </span>
              <span className="text-sm text-gray-500">({language.name})</span>
            </div>
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
};
