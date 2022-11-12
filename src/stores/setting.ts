import { persistentMap } from '@nanostores/persistent'

export type SettingsValue = {
  theme: 'dark' | 'light'
}

export const settings = persistentMap<SettingsValue>('settings_', {
  theme: 'dark'
})
