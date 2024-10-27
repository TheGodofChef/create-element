import type { Language, TranslatePair } from '@create-element/locale'

export interface ConfigProviderProps {
	locale?: Language
	extendsI18nMsg?: TranslatePair
}
