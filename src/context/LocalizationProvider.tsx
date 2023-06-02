import React, { createContext, useState } from "react";

import { LocalizationContextType } from "../types";

//PACKAGES
import I18n from 'i18n-js';
import { memoize } from 'lodash';

export const LocalizationContext = createContext<LocalizationContextType | null>(null);

export const LocalizationProvider = (props: any) => {

    const [currentLanguage, setLanguage] = useState<string>('')

    const translationGetters = {
        en: () => require('../localize/en.json') as string,
        de: () => require('../localize/de.json') as string,
        nl: () => require('../localize/nl.json') as string,
    }

    const translate = memoize(
        (key: string, config: any) => I18n.t(key, config),
        (key: string, config: any) => (config ? key + JSON.stringify(config) : key)
    )

    const setI18nConfig = (language: string) => {
        I18n.translations = { [language]: translationGetters[language]() }
        I18n.locale = language
    }

    const getTranslation = (text: string) => {
        return translate(text, null)
    }

    return (
        <LocalizationContext.Provider
            value={{
                currentLanguage,
                setI18nConfig,
                getTranslation
            }}>
            {props.children}
        </LocalizationContext.Provider>
    )

}



