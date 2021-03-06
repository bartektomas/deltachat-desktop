import { getMessageFunction, LocaleData } from '../shared/localize'

import Electron from 'electron'
import { ThemeManager } from './ThemeManager'
import { DialogId } from './components/dialogs'
import { userFeedback } from './ScreenController'

declare global {
  interface Window {
    translate: getMessageFunction
    localeData: LocaleData
    ThemeManager: ThemeManager
    exp: todo
    electron_functions: {
      // see static/preload.js
      ipcRenderer: import('electron').IpcRenderer
      remote: import('electron').Remote
      openExternal: typeof Electron.shell.openExternal
      openItem: typeof Electron.shell.openItem
    }
    preload_functions: {
      downloadFile: (file: string) => void
    }
    __openDialog: (name: DialogId, props?: any) => {}
    __userFeedback: (message: userFeedback | false) => {}
    __isReady: boolean
  }
}
