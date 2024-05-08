import { createContext, useContext, useEffect, useState } from 'react';

const LanguageContext = createContext();

export function useLanguageContext() {
  return useContext(LanguageContext);
}

export function LanguageProvider({ children }) {
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('selected-language');
    return savedLanguage || 'br'; // Se não houver idioma salvo, usar 'br' como padrão
  });

  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem('selected-theme');
    return savedTheme === 'dark'; // Se o tema salvo for 'dark', o valor inicial será true
  });

  useEffect(() => {
    localStorage.setItem('selected-language', selectedLanguage);
  }, [selectedLanguage]);


  return (
    <LanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
