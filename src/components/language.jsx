import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export function useLanguageContext() {
  return useContext(LanguageContext);
}

export function LanguageProvider({ children }) {
  const [selectedLanguage, setSelectedLanguage] = useState('br');

  return (
    <LanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
