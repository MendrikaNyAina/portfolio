/* eslint-disable react/react-in-jsx-scope */

import { enContent } from '@/app/_contents/en_content';
import { frContent } from '@/app/_contents/fr_content';
import { createContext, ReactNode, useContext, useState } from 'react';

// Définition du type pour le contexte de langue
type LanguageContextType = {
  language: 'en' | 'fr';
  toggleLanguage: () => void;
  content: () => typeof frContent | typeof enContent;
};

// Création du contexte
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Hook personnalisé pour utiliser le contexte de langue
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// LanguageProvider pour gérer l'état de la langue
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Définir l'état de la langue (par défaut : anglais)
  const [language, setLanguage] = useState<'en' | 'fr'>('fr');

  // Fonction pour basculer entre anglais et français
  const toggleLanguage = () => {
    setLanguage(prevLanguage => (prevLanguage === 'en' ? 'fr' : 'en'));
  };

  // Fonction pour renvoyer le contenu selon la langue
  const content = () => {
    return language === 'fr' ? frContent : enContent;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, content }}>
      {children}
    </LanguageContext.Provider>
  );
};
