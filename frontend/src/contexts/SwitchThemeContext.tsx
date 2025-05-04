import { createContext, Dispatch, ReactNode, useReducer } from 'react'
import { SwitchThemeReducer, ThemeActionType, ThemeStateType } from '../reducers/SwitchTheme.reducer'
import { ThemeConstants } from '../Constants'

type Props = {
  children: ReactNode
}
type SwitchThemeContextType = {
  themeType: ThemeStateType
  dispatch: Dispatch<ThemeActionType>
}

const INITIAL_STATE: ThemeStateType = { theme: localStorage.getItem('theme') || ThemeConstants.SWITCH_MODE_LIGHT }

const defaultValues: SwitchThemeContextType = {
  themeType: INITIAL_STATE,
  dispatch: () => INITIAL_STATE,
}

const SwitchThemeContext = createContext(defaultValues)

export const SwitchThemeProvider = ({ children }: Props) => {
  const [themeType, dispatch] = useReducer(SwitchThemeReducer, INITIAL_STATE)
  return <SwitchThemeContext.Provider value={{ themeType, dispatch }}>{children} </SwitchThemeContext.Provider>
}
export default SwitchThemeContext
